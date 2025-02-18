<template>
  <div class="search-results">
    <h1>Результаты поиска</h1>
    <p>По запросу: "{{ $route.query.q }}"</p>
    <!-- Здесь может располагаться список релевантных результатов -->
  </div>
</template>

<script>
export default {
  name: "SearchResults",
};
</script>

<style scoped>
.search-results {
  padding: 20px;
}
</style> 