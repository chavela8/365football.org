<template>
  <div id="app">
    <NavBar />
    <div class="top-bar">
      <SearchBar />
      <DarkModeToggle />
    </div>
    <router-view />
    <!-- Глобальные виджеты: блок с живыми матчами и комментариями -->
    <LiveMatches />
    <LiveMatchComments />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
import DarkModeToggle from './components/DarkModeToggle.vue';
import SearchBar from './components/SearchBar.vue';
import LiveMatches from './components/LiveMatches.vue';
import LiveMatchComments from './components/LiveMatchComments.vue';

export default {
  name: "App",
  components: {
    NavBar,
    DarkModeToggle,
    SearchBar,
    LiveMatches,
    LiveMatchComments,
  },
};
</script>

<style>
#app {
  font-family: 'Arial', sans-serif;
}

/* Пример глобальных стилей для темной темы */
.dark {
  background-color: #222;
  color: #eee;
}

.top-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ccc;
}
</style> 