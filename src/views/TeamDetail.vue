<template>
  <div class="team-detail">
    <h1>{{ team.name }}</h1>
    <img :src="team.logo" alt="Логотип {{ team.name }}" class="team-logo" />
    <p><strong>Дата основания: </strong>{{ team.founded }}</p>
    <p><strong>История клуба:</strong></p>
    <p>{{ team.history }}</p>
    <h2>Последние результаты</h2>
    <ul>
      <li v-for="result in team.recentResults" :key="result.id">
        {{ result.date }} - {{ result.score }}
      </li>
    </ul>
    <h2>Статистика выступлений</h2>
    <p>{{ team.stats }}</p>
  </div>
</template>

<script>
export default {
  name: "TeamDetail",
  data() {
    return {
      team: {
        id: null,
        name: "",
        logo: "",
        founded: "",
        history: "",
        recentResults: [],
        stats: "",
      },
    };
  },
  created() {
    // Получаем ID команды из маршрута и обращаемся к API для загрузки данных
    const teamId = this.$route.params.id;
    fetch(`https://api.example.com/teams/${teamId}`)
      .then((response) => response.json())
      .then((data) => {
        this.team = data;
      })
      .catch((error) => {
        console.error("Ошибка загрузки данных команды:", error);
      });
  },
};
</script>

<style scoped>
.team-detail {
  padding: 20px;
}
.team-logo {
  max-width: 200px;
}
</style> 