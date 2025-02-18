<template>
  <div class="search-bar">
    <input
      type="text"
      v-model="query"
      placeholder="Поиск новостей, команд, матчей..."
      @keyup.enter="search"
    />
    <button @click="search">Искать</button>
  </div>
</template>

<script>
export default {
  name: "SearchBar",
  data() {
    return {
      query: "",
    };
  },
  methods: {
    search() {
      // Пример вызова дальнейшей логики поиска или перехода на страницу результатов
      console.log("Ищем:", this.query);
      this.$router.push({ name: "SearchResults", query: { q: this.query } });
    },
  },
};
</script>

<style scoped>
.search-bar {
  display: flex;
  margin: 10px 0;
}
.search-bar input {
  flex: 1;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px 0 0 4px;
}
.search-bar button {
  padding: 8px 12px;
  border: none;
  background-color: var(--button-bg, #007bff);
  color: white;
  cursor: pointer;
  border-radius: 0 4px 4px 0;
}
</style> 