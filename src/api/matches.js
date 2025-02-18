import axios from 'axios';

const API_KEY = 'YOUR_API_KEY'; // замените на ваш ключ API
const API_HOST = 'api-football-v1.p.rapidapi.com';

const axiosInstance = axios.create({
  baseURL: 'https://api-football-v1.p.rapidapi.com/v3',
  headers: {
    'x-rapidapi-key': API_KEY,
    'x-rapidapi-host': API_HOST,
  }
});

export const fetchLiveMatches = async () => {
  try {
    const response = await axiosInstance.get('/fixtures', {
      params: { live: 'all' },
    });
    return response.data.response;
  } catch (error) {
    console.error('Error fetching live matches:', error);
    return [];
  }
}; 