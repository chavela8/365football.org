import axios from 'axios';

// Пример API-ендпоинта для получения рыночной стоимости игрока.
// Замените BASE_URL и логику на актуальную, если у вас есть реальный источник данных.
const BASE_URL = 'https://example.com/api/marketvalue';

export const fetchPlayerMarketValue = async (playerId) => {
  try {
    const response = await axios.get(`${BASE_URL}/player/${playerId}`);
    // Ожидается, что API вернет объект вида: { marketValue: "€12.00m" }
    return response.data.marketValue;
  } catch (error) {
    console.error('Ошибка получения стоимости игрока:', error);
    return null;
  }
}; 