import axios from 'axios';

const CHATGPT_API_URL = 'https://api.openai.com/v1/chat/completions';
const OPENAI_API_KEY = process.env.VUE_APP_OPENAI_API_KEY;

export const generateMatchReview = async (matchData) => {
  const prompt = `Составь аналитический обзор матча между ${matchData.homeTeam} и ${matchData.awayTeam}. Матч окончился со счетом ${matchData.score}. Дай краткий анализ ключевых моментов, тактических изменений и результатов.`;
  
  try {
    const response = await axios.post(
      CHATGPT_API_URL,
      {
        model: "gpt-3.5-turbo",
        messages: [
          { role: "system", content: "Ты футбольный аналитик." },
          { role: "user", content: prompt }
        ],
        max_tokens: 150,
        temperature: 0.7,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${OPENAI_API_KEY}`,
        },
      }
    );
    const review = response.data.choices[0].message.content;
    return review;
  } catch (error) {
    console.error('Error generating match review:', error);
    return "Не удалось сгенерировать обзор матча.";
  }
}; 