<template>
  <div class="matches-page">
    <h1>Матчи</h1>
    <LiveMatchesApi />
    <LiveMatchComments />
  </div>
</template>

<script>
import LiveMatchesApi from '@/components/LiveMatchesApi.vue';
import LiveMatchComments from '@/components/LiveMatchComments.vue';
export default {
  name: "Matches",
  components: {
    LiveMatchesApi,
    LiveMatchComments,
  },
};
</script>

<style scoped>
.matches-page {
  padding: 20px;
}
</style> 