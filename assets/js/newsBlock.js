document.addEventListener("DOMContentLoaded", () => {
  const newsBlock = document.getElementById("news-block");

  function showLoading() {
    if (newsBlock) {
      newsBlock.innerHTML = `<p class="loading-message">Загрузка новостей...</p>`;
    }
  }

  function displayErrorMessage(message) {
    if (newsBlock) {
      newsBlock.innerHTML = `
        <div class="error-container">
          <p class="error-message">${message}</p>
          <button id="retry-news" class="retry-button">Повторить попытку</button>
        </div>
      `;
      const retryButton = document.getElementById("retry-news");
      if (retryButton) {
        retryButton.addEventListener("click", fetchNews);
      }
    }
  }

  async function fetchNews() {
    showLoading();
    try {
      // Замените URL ниже на реальный API-эндпоинт для новостей
      const response = await fetch("https://api.example.com/football-news");
      if (!response.ok) {
        throw new Error(`Ошибка запроса: ${response.status}`);
      }
      const newsItems = await response.json();
      updateNewsUI(newsItems);
    } catch (error) {
      console.error("Ошибка получения новостей:", error);
      displayErrorMessage("Не удалось загрузить новости. Попробуйте позже.");
    }
  }

  function updateNewsUI(newsItems) {
    if (!newsBlock) return;
    newsBlock.innerHTML = "";

    if (newsItems.length === 0) {
      newsBlock.innerHTML = "<p>Новости отсутствуют.</p>";
      return;
    }

    newsItems.forEach(news => {
      const newsCard = document.createElement("div");
      newsCard.classList.add("news-card", "update-animation");

      newsCard.onclick = () => {
        window.location.href = news.url;
      };

      newsCard.innerHTML = `
        <h3 class="news-title">${news.title}</h3>
        <p class="news-time">${news.publishedAt}</p>
        <p class="news-summary">${news.summary}</p>
      `;
      newsBlock.appendChild(newsCard);
    });
  }

  // Первоначальная загрузка и период обновления каждые 2 минуты (120000 мс)
  fetchNews();
  setInterval(fetchNews, 120000);
}); 