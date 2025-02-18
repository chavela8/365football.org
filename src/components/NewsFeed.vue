<template>
  <div class="news-feed">
    <h2>Футбольные Новости в Реальном Времени</h2>
    <div v-for="news in newsList" :key="news.id" class="news-item">
      <img :src="news.imageUrl" alt="News image" />
      <div class="news-details">
        <h3>{{ news.title }}</h3>
        <p>{{ news.summary }}</p>
        <a :href="news.link" target="_blank">Читать далее</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewsFeed",
  data() {
    return {
      newsList: [],
    };
  },
  async created() {
    try {
      let response = await fetch("https://api.yournewsprovider.com/football-news");
      let data = await response.json();
      this.newsList = data.articles;
    } catch (error) {
      console.error("Ошибка получения новостей", error);
    }
  },
};
</script>

<style scoped>
.news-feed {
  display: flex;
  flex-direction: column;
  gap: 15px;
}
.news-item {
  display: flex;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 8px;
}
.news-item img {
  width: 150px;
  height: auto;
  margin-right: 15px;
}
.news-details {
  flex: 1;
}
</style> 