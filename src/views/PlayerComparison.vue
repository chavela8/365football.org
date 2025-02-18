<template>
  <div class="player-comparison">
    <h1>Сравнение игроков</h1>
    <PlayerFilter @update:filter="applyFilter" />
    <div class="players-list">
      <div
        class="player-item"
        v-for="player in filteredPlayers"
        :key="player.id"
        @click="toggleSelection(player)"
        :class="{ selected: selectedPlayers.includes(player) }"
      >
        <img :src="player.photo" alt="Фото игрока" />
        <span>{{ player.name }}</span>
      </div>
    </div>
    <div v-if="selectedPlayers.length">
      <h2>Динамика рыночной стоимости выбранных игроков</h2>
      <PlayerComparisonChart :players="selectedPlayers" />
    </div>
  </div>
</template>

<script>
import PlayerFilter from '@/components/PlayerFilter.vue';
import PlayerComparisonChart from '@/components/PlayerComparisonChart.vue';

export default {
  name: "PlayerComparison",
  components: {
    PlayerFilter,
    PlayerComparisonChart,
  },
  data() {
    return {
      // Здесь предполагается, что players загружаются через API;
      // пример статичных данных для демонстрации:
      players: [
        {
          id: 1,
          name: "Криштиану Роналду",
          photo: "https://s.scr365.net/teams/2024/6/28/FoQ2kYkL_32_8976.png",
          history: [
            { date: "2023-08-01", marketValue: 80 },
            { date: "2023-09-01", marketValue: 82 },
            { date: "2023-10-01", marketValue: 81 }
          ]
        },
        {
          id: 2,
          name: "Лионель Месси",
          photo: "https://example.com/messi.png",
          history: [
            { date: "2023-08-01", marketValue: 90 },
            { date: "2023-09-01", marketValue: 91 },
            { date: "2023-10-01", marketValue: 92 }
          ]
        }
        // Добавьте другие записи
      ],
      filteredPlayers: [],
      selectedPlayers: [],
      currentFilter: {}
    };
  },
  created() {
    this.filteredPlayers = this.players;
  },
  methods: {
    applyFilter(filter) {
      this.currentFilter = filter;
      const query = filter.searchQuery.toLowerCase();
      this.filteredPlayers = this.players.filter(player => {
        const matchesName = player.name.toLowerCase().includes(query);
        // Дополнительные проверки фильтров можно добавить здесь
        return matchesName;
      });
    },
    toggleSelection(player) {
      const index = this.selectedPlayers.findIndex(p => p.id === player.id);
      if (index !== -1) {
        this.selectedPlayers.splice(index, 1);
      } else {
        this.selectedPlayers.push(player);
      }
    }
  }
};
</script>

<style scoped>
.player-comparison {
  padding: 20px;
}
.players-list {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin-bottom: 20px;
}
.player-item {
  cursor: pointer;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 6px;
  transition: transform 0.2s, box-shadow 0.2s;
  text-align: center;
}
.player-item:hover {
  transform: scale(1.05);
  box-shadow: 0 2px 10px rgba(0,0,0,0.15);
}
.player-item.selected {
  border-color: #3e95cd;
  background: #eaf4ff;
}
.player-item img {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-bottom: 5px;
}
</style> 