<template>
  <div class="market-chart">
    <canvas ref="chartCanvas"></canvas>
  </div>
</template>

<script>
import { fetchPlayerMarketHistory } from '@/api/marketHistory.js';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

export default {
  name: "PlayerMarketChart",
  props: {
    playerId: {
      type: [String, Number],
      required: true,
    },
  },
  data() {
    return {
      chart: null,
      historyData: [],
    };
  },
  async mounted() {
    this.historyData = await fetchPlayerMarketHistory(this.playerId);
    this.renderChart();
  },
  methods: {
    renderChart() {
      // Формируем данные для графика
      // Предполагается, что каждый объект имеет свойства: date (в формате YYYY-MM-DD) и marketValue (число, измеряемое в млн €)
      const labels = this.historyData.map(item => item.date);
      const data = this.historyData.map(item => item.marketValue);
      
      const ctx = this.$refs.chartCanvas.getContext('2d');
      this.chart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: labels,
          datasets: [{
            label: 'Рыночная стоимость (млн €)',
            data: data,
            borderColor: '#3e95cd',
            fill: false,
            tension: 0.2,
          }]
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              display: true,
              position: 'top',
            },
            tooltip: {
              mode: 'index',
              intersect: false,
            }
          },
          scales: {
            x: {
              display: true,
              title: {
                display: true,
                text: 'Дата'
              },
            },
            y: {
              display: true,
              title: {
                display: true,
                text: 'Стоимость (млн €)'
              },
              ticks: {
                callback: function(value) {
                  return "€" + value + "m";
                }
              }
            }
          }
        }
      });
    }
  },
  beforeUnmount() {
    if (this.chart) {
      this.chart.destroy();
    }
  }
};
</script>

<style scoped>
.market-chart {
  padding: 10px;
}
canvas {
  max-width: 100%;
}
</style> 