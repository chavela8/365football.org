import axios from 'axios';

// Реальный URL вашего бекэнда, который предоставляет дополнительные метрики игроков
const BASE_URL = 'https://api.myfootballdata.com';

export const fetchPlayerMetrics = async (playerId) => {
  try {
    const response = await axios.get(`${BASE_URL}/players/${playerId}/metrics`);
    // API возвращает объект вида:
    // {
    //   metrics: {
    //     efficiencyRatio: "1.25",
    //     goalsPerMatch: "0.8",
    //     assistsPerMatch: "0.5",
    //     comparison: "Среднее значение по лиге ..."
    //   }
    // }
    return response.data.metrics;
  } catch (error) {
    console.error("Ошибка получения метрик игрока:", error);
    return {};
  }
}; 