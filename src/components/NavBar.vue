<template>
  <nav class="navbar">
    <ul>
      <li><router-link to="/">Главная</router-link></li>
      <li><router-link to="/news">Новости</router-link></li>
      <li><router-link to="/matches">Матчи</router-link></li>
      <li><router-link to="/clubs">Клубы</router-link></li>
      <li><router-link to="/stats">Статистика</router-link></li>
      <li><router-link to="/analytics">Аналитика</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style scoped>
.navbar {
  background-color: var(--nav-background, #333);
  padding: 10px;
}
.navbar ul {
  list-style: none;
  display: flex;
  justify-content: space-around;
  margin: 0;
  padding: 0;
}
.navbar li {
  color: white;
}
.navbar a {
  color: white;
  text-decoration: none;
  font-weight: bold;
}
</style> 