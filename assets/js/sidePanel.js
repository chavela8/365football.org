document.addEventListener("DOMContentLoaded", () => {
  const sidePanel = document.getElementById("side-panel");

  function showLoading() {
    if (sidePanel) {
      sidePanel.innerHTML = `<p class="loading-message">Загрузка статистики чемпионатов...</p>`;
    }
  }

  function displayErrorMessage(message) {
    if (sidePanel) {
      sidePanel.innerHTML = `
        <div class="error-container">
          <p class="error-message">${message}</p>
          <button id="retry-stats" class="retry-button">Повторить попытку</button>
        </div>
      `;
      const retryButton = document.getElementById("retry-stats");
      if (retryButton) {
        retryButton.addEventListener("click", fetchChampionsStats);
      }
    }
  }

  async function fetchChampionsStats() {
    showLoading();
    try {
      // Замените URL ниже на реальный API-эндпоинт для статистики чемпионатов
      const response = await fetch("https://api.example.com/champions-stats");
      if (!response.ok) {
        throw new Error(`Ошибка запроса: ${response.status}`);
      }
      const stats = await response.json();
      updateSidePanelUI(stats);
    } catch (error) {
      console.error("Ошибка получения статистики чемпионатов:", error);
      displayErrorMessage("Не удалось загрузить данные статистики чемпионатов. Попробуйте позже.");
    }
  }

  function updateSidePanelUI(stats) {
    if (!sidePanel) return;
    sidePanel.innerHTML = "";

    if (stats.length === 0) {
      sidePanel.innerHTML = "<p>Нет данных для отображения.</p>";
      return;
    }

    stats.forEach(championship => {
      const champDiv = document.createElement("div");
      champDiv.classList.add("championship-block", "update-animation");

      champDiv.innerHTML = `
        <h4 class="championship-title">${championship.name}</h4>
        <table class="stats-table">
          <thead>
            <tr>
              <th>Игрок</th>
              <th>Голы</th>
              <th>Голевые передачи</th>
            </tr>
          </thead>
          <tbody>
            ${championship.players.map(player => `
              <tr>
                <td>${player.name}</td>
                <td>${player.goals}</td>
                <td>${player.assists}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      `;
      sidePanel.appendChild(champDiv);
    });
  }

  // Первоначальная загрузка статистики и обновление каждые 5 минут (300000 мс)
  fetchChampionsStats();
  setInterval(fetchChampionsStats, 300000);
}); 