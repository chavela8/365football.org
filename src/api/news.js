import axios from 'axios';

const NEWS_API_KEY = 'YOUR_NEWS_API_KEY'; // замените на ваш ключ NewsAPI
const axiosNews = axios.create({
  baseURL: 'https://newsapi.org/v2',
  headers: {
    Authorization: `Bearer ${NEWS_API_KEY}`,
  }
});

export const fetchFootballNews = async () => {
  try {
    const response = await axiosNews.get('/everything', {
      params: {
        q: 'football',
        language: 'ru',
        sortBy: 'publishedAt',
        pageSize: 10,
      }
    });
    return response.data.articles;
  } catch (error) {
    console.error('Error fetching football news:', error);
    return [];
  }
}; 