import axios from 'axios';

// Прокси для обхода ограничений CORS
const proxyUrl = "https://api.allorigins.hexocode.repl.co/get?disableCache=true&url=";

// Массив RSS-лент: англоязычные источники и русскоязычные сайты
const feedUrls = [
  "https://www.espn.com/espn/rss/soccer/news",       // ESPN Soccer News (англ.)
  "http://feeds.bbci.co.uk/sport/football/rss.xml",    // BBC Sport Football (англ.)
  "https://soccer365.ru/rss",                          // Soccer365 (рус.)
  "https://ru.uefa.com/rss.xml",                       // UEFA (рус.)
  "https://www.sports.ru/football/rss.xml",            // Sports.ru Football (рус.)
  "https://www.championat.com/football/rss.xml",       // Championat (рус.)
  "https://football.kulichki.net/rss.xml"              // Football Kulichki (рус.)
];

/**
 * Функция для парсинга RSS-ленты.
 * Добавляет к каждой новости свойство feedUrl для дальнейшей обработки (например, определения языка источника).
 */
function parseRSS(xmlText, feedUrl = "") {
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(xmlText, "application/xml");

  // Если произошла ошибка парсинга
  if (xmlDoc.querySelector("parsererror")) {
    console.error("Error parsing XML:", xmlDoc.querySelector("parsererror").textContent);
    return [];
  }
  
  const items = Array.from(xmlDoc.querySelectorAll("item"));
  return items.map(item => ({
    title: item.querySelector("title")?.textContent || "",
    link: item.querySelector("link")?.textContent || "",
    pubDate: item.querySelector("pubDate") ? new Date(item.querySelector("pubDate").textContent) : null,
    description: item.querySelector("description")?.textContent || "",
    feedUrl,  // Привязываем источник новости
  }));
}

/**
 * Функция для перевода текста с помощью LibreTranslate.
 * Если запрос не удалось выполнить, возвращает исходный текст.
 */
async function translateText(text, targetLang) {
  if (!text) return text;
  try {
    const response = await axios.post("https://libretranslate.com/translate", {
      q: text,
      source: "auto", // Автоматическое определение языка
      target: targetLang,
      format: "text"
    }, {
      headers: { 'Content-Type': 'application/json' }
    });
    return response.data.translatedText;
  } catch (error) {
    console.error("Translation error:", error);
    return text;
  }
}

/**
 * Функция для определения исходного языка по URL источника.
 * Для англоязычных источников (ESPN, BBC) возвращаем "en", а для остальных — "ru".
 */
function getSourceLanguageForFeed(feedUrl) {
  if (feedUrl.includes("espn.com") || feedUrl.includes("bbc.co.uk")) {
    return "en";
  }
  // Для известных русскоязычных сайтов
  return "ru";
}

/**
 * Асинхронная функция для получения и агрегации новостей.
 * @param {string} targetLang - Язык, на который необходимо перевести новости (по умолчанию "ru").
 */
export const fetchFootballNews = async (targetLang = "ru") => {
  try {
    let allNews = [];
    
    // Получаем данные каждой RSS-ленты через прокси для обхода CORS
    for (const feedUrl of feedUrls) {
      const url = proxyUrl + encodeURIComponent(feedUrl);
      const response = await axios.get(url);
      
      // Ответ от AllOrigins содержит XML в поле data.contents
      const contents = response.data?.contents;
      if (contents) {
        const newsItems = parseRSS(contents, feedUrl);
        allNews.push(...newsItems);
      }
    }
    
    // Сортируем новости по дате публикации (сначала свежие)
    allNews.sort((a, b) => b.pubDate - a.pubDate);
    
    // Проходим по каждой новости и, если исходный язык не совпадает с выбранным,
    // выполняем перевод заголовка и описания
    await Promise.all(allNews.map(async (article) => {
      const sourceLang = getSourceLanguageForFeed(article.feedUrl);
      if (sourceLang !== targetLang) {
        article.title = await translateText(article.title, targetLang);
        article.description = await translateText(article.description, targetLang);
      }
    }));
    
    // Возвращаем 10 самых свежих новостей
    return allNews.slice(0, 10);
    
  } catch (error) {
    console.error("Ошибка при получении RSS новостей:", error);
    return [];
  }
}; 