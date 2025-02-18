<template>
  <div class="player-filter">
    <input
      type="text"
      v-model="searchQuery"
      @input="onFilterChange"
      placeholder="Введите имя игрока..."
      class="filter-input"
    />
    <div class="filter-options">
      <label>
        <input type="checkbox" v-model="filters.topLeague" @change="onFilterChange" />
        Только топ-лиги
      </label>
      <label>
        <input type="checkbox" v-model="filters.active" @change="onFilterChange" />
        Активные игроки
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: "PlayerFilter",
  data() {
    return {
      searchQuery: "",
      filters: {
        topLeague: false,
        active: false,
      }
    };
  },
  methods: {
    onFilterChange() {
      this.$emit("update:filter", {
        searchQuery: this.searchQuery,
        topLeague: this.filters.topLeague,
        active: this.filters.active,
      });
    }
  }
};
</script>

<style scoped>
.player-filter {
  padding: 10px;
  background: #f5f5f5;
  border-radius: 8px;
  margin-bottom: 20px;
  animation: fadeIn 0.5s;
}
.filter-input {
  width: 100%;
  padding: 8px;
  font-size: 1em;
  border: 1px solid #ddd;
  border-radius: 4px;
  transition: border-color 0.3s;
}
.filter-input:focus {
  border-color: #3e95cd;
  outline: none;
}
.filter-options {
  margin-top: 10px;
}
.filter-options label {
  margin-right: 15px;
  cursor: pointer;
  user-select: none;
}
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
</style> 