<template>
  <div class="live-matches">
    <h2>Живые Матчи (Данные API)</h2>
    <ul>
      <li v-for="match in matches" :key="match.fixture.id">
        <div>
          <strong>{{ match.teams.home.name }}</strong> vs <strong>{{ match.teams.away.name }}</strong>
          <span>
            {{ match.score.fulltime.home }} - {{ match.score.fulltime.away }}
          </span>
          <button @click="generateReview(match)">Сгенерировать обзор</button>
        </div>
        <p v-if="match.review">{{ match.review }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import { fetchLiveMatches } from '@/api/matches.js';
import { generateMatchReview } from '@/api/aiAnalytics.js';

export default {
  name: "LiveMatchesApi",
  data() {
    return {
      matches: [],
    };
  },
  async created() {
    await this.loadMatches();
    // Обновляем данные каждые 30 секунд
    this.timer = setInterval(this.loadMatches, 30000);
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },
  methods: {
    async loadMatches() {
      const liveMatches = await fetchLiveMatches();
      this.matches = liveMatches;
    },
    async generateReview(match) {
      const review = await generateMatchReview({
        homeTeam: match.teams.home.name,
        awayTeam: match.teams.away.name,
        score: `${match.score.fulltime.home}-${match.score.fulltime.away}`,
      });
      // Добавляем сгенерированный обзор в объект матча
      this.$set(match, 'review', review);
    },
  },
};
</script>

<style scoped>
.live-matches {
  padding: 20px;
}
</style> 