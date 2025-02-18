<template>
  <div class="live-matches">
    <h2>Живые Матчи</h2>
    <ul>
      <li v-for="match in matches" :key="match.id">
        <strong>{{ match.homeTeam }}</strong> vs <strong>{{ match.awayTeam }}</strong>
        <span>{{ match.score }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "LiveMatches",
  data() {
    return {
      matches: [],
    };
  },
  mounted() {
    // Подключение к WebSocket для получения данных о матчах в режиме live
    const socket = new WebSocket("wss://your-live-matches-api.com");
    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      this.matches = data.matches;
    };
    socket.onerror = (error) => {
      console.error("WebSocket error: ", error);
    };
  },
};
</script>

<style scoped>
.live-matches {
  padding: 20px;
  background-color: var(--live-matches-bg, #fff);
}
</style> 