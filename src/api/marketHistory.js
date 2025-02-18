import axios from 'axios';

// Реальный URL вашего бекэнда, который агрегирует данные о рыночной стоимости игрока
const BASE_URL = 'https://api.myfootballdata.com';

export const fetchPlayerMarketHistory = async (playerId) => {
  try {
    const response = await axios.get(`${BASE_URL}/players/${playerId}/market-history`);
    // API возвращает объект вида:
    // { history: [ { date: "2023-01-01", marketValue: 12.3 }, {...} ] }
    return response.data.history;
  } catch (error) {
    console.error('Ошибка получения исторических данных стоимости:', error);
    return [];
  }
}; 