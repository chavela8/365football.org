<template>
  <div class="clubs-page">
    <h1>Клубы</h1>
    <!-- Пример списка клубов с кликабельными ссылками -->
    <ul>
      <li v-for="club in clubs" :key="club.id">
        <router-link :to="{ name: 'TeamDetail', params: { id: club.id } }">{{ club.name }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Clubs",
  data() {
    return {
      clubs: [],
    };
  },
  created() {
    fetch("https://api.example.com/clubs")
      .then((response) => response.json())
      .then((data) => {
        this.clubs = data;
      })
      .catch((error) => {
        console.error("Ошибка загрузки клубов:", error);
      });
  },
};
</script>

<style scoped>
.clubs-page {
  padding: 20px;
}
</style> 