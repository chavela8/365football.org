<template>
  <div class="comparison-chart">
    <div class="chart-controls">
      <label>Выберите период:
        <select v-model="selectedInterval" @change="updateChart">
          <option value="1M">1 месяц</option>
          <option value="3M">3 месяца</option>
          <option value="6M">6 месяцев</option>
          <option value="1Y">1 год</option>
          <option value="all">Все время</option>
        </select>
      </label>
    </div>
    <canvas ref="chartCanvas"></canvas>
  </div>
</template>

<script>
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

export default {
  name: "PlayerComparisonChart",
  props: {
    players: {
      type: Array,
      required: true,
      // Каждый игрок должен содержать name и history – массив объектов вида:
      // { date: "YYYY-MM-DD", marketValue: Number }
    }
  },
  data() {
    return {
      chart: null,
      selectedInterval: "all",
    };
  },
  mounted() {
    this.renderChart();
  },
  methods: {
    filterHistory(history) {
      if (this.selectedInterval === "all") {
        return history;
      }
      const now = new Date();
      let pastDate = new Date();
      if (this.selectedInterval === "1M") {
        pastDate.setMonth(now.getMonth() - 1);
      } else if (this.selectedInterval === "3M") {
        pastDate.setMonth(now.getMonth() - 3);
      } else if (this.selectedInterval === "6M") {
        pastDate.setMonth(now.getMonth() - 6);
      } else if (this.selectedInterval === "1Y") {
        pastDate.setFullYear(now.getFullYear() - 1);
      }
      return history.filter(item => new Date(item.date) >= pastDate);
    },
    renderChart() {
      const ctx = this.$refs.chartCanvas.getContext("2d");
      const datasets = this.players.map((player, index) => {
        const filteredHistory = this.filterHistory(player.history);
        return {
          label: player.name,
          data: filteredHistory.map(item => ({ x: item.date, y: item.marketValue })),
          borderColor: this.getColor(index),
          fill: false,
          tension: 0.2,
        };
      });
      this.chart = new Chart(ctx, {
        type: "line",
        data: {
          datasets,
        },
        options: {
          responsive: true,
          interaction: { mode: "index", intersect: false },
          plugins: {
            legend: { position: "top" },
            tooltip: { mode: "index", intersect: false }
          },
          scales: {
            x: {
              type: "time",
              time: { unit: "month" },
              title: { display: true, text: "Дата" }
            },
            y: {
              title: { display: true, text: "Стоимость (млн €)" },
              ticks: {
                callback: (value) => `€${value}m`
              }
            },
          },
        },
      });
    },
    updateChart() {
      if (!this.chart) return;
      // Обновляем данные графика – для каждого игрока фильтруем историю
      this.chart.data.datasets.forEach((dataset, index) => {
        const filteredHistory = this.filterHistory(this.players[index].history);
        dataset.data = filteredHistory.map(item => ({ x: item.date, y: item.marketValue }));
      });
      this.chart.update();
    },
    getColor(index) {
      // Простейшая функция для выбора цвета по индексу
      const colors = ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850"];
      return colors[index % colors.length];
    },
  },
  beforeUnmount() {
    if (this.chart) {
      this.chart.destroy();
    }
  },
};
</script>

<style scoped>
.comparison-chart {
  background-color: #ffffff;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  animation: slideIn 0.6s;
}
.chart-controls {
  margin-bottom: 10px;
  font-size: 0.9em;
}
@keyframes slideIn {
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}
</style> 