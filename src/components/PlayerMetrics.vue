<template>
  <div class="player-metrics" v-if="Object.keys(metrics).length">
    <h3>Дополнительные метрики</h3>
    <ul>
      <li><strong>Коэффициент эффективности:</strong> {{ metrics.efficiencyRatio }}</li>
      <li><strong>Голы за матч:</strong> {{ metrics.goalsPerMatch }}</li>
      <li><strong>Ассисты за матч:</strong> {{ metrics.assistsPerMatch }}</li>
      <li><strong>Отдача передач:</strong> {{ metrics.passingEfficiency }}</li>
      <li><strong>Процент успешных действий:</strong> {{ metrics.successfulActionsPercentage }}%</li>
      <li v-if="metrics.comparison">
        <strong>Сравнение с аналогами:</strong> {{ metrics.comparison }}
      </li>
    </ul>
  </div>
</template>

<script>
import { fetchPlayerMetrics } from '@/api/playerMetrics.js';

export default {
  name: "PlayerMetrics",
  props: {
    playerId: {
      type: [String, Number],
      required: true,
    },
  },
  data() {
    return {
      metrics: {},
    };
  },
  async created() {
    this.metrics = await fetchPlayerMetrics(this.playerId);
  },
};
</script>

<style scoped>
.player-metrics {
  background-color: #fafafa;
  border: 1px solid #ddd;
  padding: 10px;
  margin-top: 20px;
  border-radius: 5px;
  animation: fadeIn 0.6s;
}
.player-metrics ul {
  list-style: none;
  padding: 0;
}
.player-metrics li {
  margin-bottom: 8px;
  font-size: 0.95em;
}
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
</style> 