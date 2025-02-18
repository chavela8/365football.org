<template>
  <div class="news-page">
    <h1>Новости</h1>
    <!-- Компонент NewsFeed уже принят -->
    <NewsFeed />
  </div>
</template>

<script>
import NewsFeed from '@/components/NewsFeed.vue';
export default {
  name: "News",
  components: {
    NewsFeed,
  },
};
</script>

<style scoped>
.news-page {
  padding: 20px;
}
</style> 