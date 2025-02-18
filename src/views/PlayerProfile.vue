<template>
  <div class="player-profile">
    <h1>{{ player.name }}</h1>
    <img :src="player.photo" alt="Фотография {{ player.name }}" />
    <p><strong>Дата рождения:</strong> {{ player.birthDate }}</p>
    <p><strong>Клуб:</strong> {{ player.club }}</p>
    <!-- Другие данные и статистика игрока -->

    <!-- Компонент для отображения текущей рыночной стоимости -->
    <MarketValue :playerId="player.id" />

    <!-- Историческая динамика рыночной стоимости -->
    <div class="market-history">
      <h3>Историческая динамика рыночной стоимости</h3>
      <PlayerMarketChart :playerId="player.id" />
    </div>

    <!-- Дополнительные метрики и аналитика -->
    <div class="player-advanced-metrics">
      <h3>Дополнительная аналитика</h3>
      <PlayerMetrics :playerId="player.id" />
    </div>

    <!-- Остальные разделы профиля -->
  </div>
</template>

<script>
import MarketValue from '@/components/MarketValue.vue';
import PlayerMarketChart from '@/components/PlayerMarketChart.vue';
import PlayerMetrics from '@/components/PlayerMetrics.vue';

export default {
  name: "PlayerProfile",
  components: {
    MarketValue,
    PlayerMarketChart,
    PlayerMetrics,
  },
  data() {
    return {
      // Пример объекта игрока; данные могут загружаться через API или router params.
      player: {
        id: 3596,
        name: "Криштиану Роналду",
        birthDate: "05.02.1985",
        club: "Аль-Наср Эр-Рияд",
        photo: "https://s.scr365.net/teams/2024/6/28/FoQ2kYkL_32_8976.png",
      },
    };
  },
};
</script>

<style scoped>
.player-profile {
  padding: 20px;
}
.market-history,
.player-advanced-metrics {
  margin-top: 20px;
  border-top: 1px solid #ddd;
  padding-top: 20px;
}
</style> 