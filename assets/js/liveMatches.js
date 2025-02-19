document.addEventListener("DOMContentLoaded", () => {
  const liveMatchesContainer = document.getElementById("live-matches");

  // Отображение загрузки
  function showLoading() {
    if (liveMatchesContainer) {
      liveMatchesContainer.innerHTML = `<p class="loading-message">Загрузка матчей...</p>`;
    }
  }

  // Функция для отображения сообщения об ошибке с кнопкой повтора
  function displayErrorMessage(message) {
    if (liveMatchesContainer) {
      liveMatchesContainer.innerHTML = `
        <div class="error-container">
          <p class="error-message">${message}</p>
          <button id="retry-live-matches" class="retry-button">Повторить попытку</button>
        </div>
      `;
      const retryButton = document.getElementById("retry-live-matches");
      if (retryButton) {
        retryButton.addEventListener("click", fetchLiveMatches);
      }
    }
  }

  async function fetchLiveMatches() {
    showLoading();
    try {
      // Замените URL ниже на реальный API-эндпоинт
      const response = await fetch("https://api.example.com/live-matches");
      if (!response.ok) {
        throw new Error(`Ошибка запроса: ${response.status}`);
      }
      const matches = await response.json();
      updateLiveMatchesUI(matches);
    } catch (error) {
      console.error("Ошибка получения данных о матчах:", error);
      displayErrorMessage("Не удалось загрузить данные матчей. Попробуйте позже.");
    }
  }

  function updateLiveMatchesUI(matches) {
    if (!liveMatchesContainer) return;
    liveMatchesContainer.innerHTML = "";

    if (matches.length === 0) {
      liveMatchesContainer.innerHTML = "<p>На данный момент нет активных матчей.</p>";
      return;
    }

    matches.forEach(match => {
      const matchCard = document.createElement("div");
      matchCard.classList.add("match-card", "update-animation");

      matchCard.innerHTML = `
        <div class="match-teams">
          <span class="team-name">${match.team1}</span> vs <span class="team-name">${match.team2}</span>
        </div>
        <div class="match-score">
          <span class="score">${match.score1}</span> - <span class="score">${match.score2}</span>
        </div>
        <div class="match-info">
          <span class="match-time">${match.time}</span>
          <span class="match-status">${match.status}</span>
        </div>
      `;
      liveMatchesContainer.appendChild(matchCard);
    });
  }

  // Используем Page Visibility API: при отсутствии фокуса на вкладке обновления приостанавливаются
  let pollingIntervalId;
  function startPolling() {
    fetchLiveMatches(); // начальный запрос
    pollingIntervalId = setInterval(() => {
      if (document.visibilityState === "visible") {
        fetchLiveMatches();
      }
    }, 60000);
  }
  
  function stopPolling() {
    if (pollingIntervalId) clearInterval(pollingIntervalId);
  }
  
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "visible") {
      startPolling();
    } else {
      stopPolling();
    }
  });

  // Запускаем опрос, если вкладка видима при загрузке
  if (document.visibilityState === "visible") {
    startPolling();
  }
}); 