<template>
  <div class="live-match-comments">
    <h2>Прямой Эфир / Комментарии</h2>
    <ul>
      <li v-for="comment in comments" :key="comment.id">
        <strong>{{ comment.timestamp }}</strong>: {{ comment.text }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "LiveMatchComments",
  data() {
    return {
      comments: [],
    };
  },
  created() {
    // Инициируем подключение через веб-сокеты для получения живых комментариев
    const socket = new WebSocket("wss://your-server.com/live-comments");
    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      this.comments.push({
        id: data.id,
        timestamp: data.timestamp,
        text: data.comment,
      });
    };
  },
};
</script>

<style scoped>
.live-match-comments {
  margin: 20px;
  padding: 10px;
  background-color: #f9f9f9;
}
</style> 