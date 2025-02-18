<template>
  <div class="market-value" v-if="marketValue">
    <h3>Рыночная стоимость игрока</h3>
    <p>{{ marketValue }}</p>
  </div>
</template>

<script>
import { fetchPlayerMarketValue } from '@/api/marketValue.js';

export default {
  name: "MarketValue",
  props: {
    playerId: {
      type: [String, Number],
      required: true,
    },
  },
  data() {
    return {
      marketValue: null,
    };
  },
  async created() {
    await this.loadMarketValue();
    // Настроим обновление стоимости каждые 10 минут (600000 мс)
    this.timer = setInterval(this.loadMarketValue, 600000);
  },
  beforeDestroy() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  },
  methods: {
    async loadMarketValue() {
      this.marketValue = await fetchPlayerMarketValue(this.playerId);
    },
  },
};
</script>

<style scoped>
.market-value {
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  padding: 10px;
  margin-top: 20px;
  border-radius: 5px;
}
.market-value h3 {
  margin: 0 0 10px;
  font-size: 1.2em;
}
</style> 