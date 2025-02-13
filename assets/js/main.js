import { getFootballData } from './supabaseService.js';

// Пример инициализации JavaScript
document.addEventListener('DOMContentLoaded', async () => {
    console.log("Сайт загружен и готов к работе.");
    
    // Инициализация обратного отсчёта для секции "Матч дня"
    // Задайте нужную дату и время в формате ISO (например, 2023-12-31T18:00:00)
    initCountdown('match-countdown', '2023-12-31T18:00:00');

    // Проверка поддержки Service Worker и его регистрация
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', function() {
            navigator.serviceWorker.register('/sw.js').then(function(registration) {
                console.log('ServiceWorker успешно зарегистрирован с областью: ', registration.scope);
            }, function(error) {
                console.log('Регистрация ServiceWorker не удалась: ', error);
            });
        });
    }
    
    // Scroll To Top functionality (см. ниже)
    const scrollToTopBtn = document.getElementById('scrollToTop');
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 100) {
            scrollToTopBtn.style.display = 'flex';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    });
  
    scrollToTopBtn.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Здесь можно добавить AJAX-запросы для динамического обновления:
    // - Результатов матчей (live scores)
    // - Турнирной таблицы
    // - Новостей и т.д.

    // Переключение темной темы
    const darkModeToggle = document.getElementById('toggleDarkMode');
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark') {
        document.body.classList.add('dark-mode');
        darkModeToggle.innerText = 'Светлая тема';
    }
    darkModeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        let theme = 'light';
        if (document.body.classList.contains('dark-mode')) {
            theme = 'dark';
            darkModeToggle.innerText = 'Светлая тема';
        } else {
            darkModeToggle.innerText = 'Тёмная тема';
        }
        localStorage.setItem('theme', theme);
    });

    // Получаем данные из Supabase
    const footballData = await getFootballData();
    console.log('Данные футбола из Supabase:', footballData);
    
    // Пример: обновление контейнера на странице
    const dataContainer = document.getElementById('footballDataContainer');
    if (dataContainer && footballData.length > 0) {
        dataContainer.innerHTML = footballData.map(item => `
            <div class="football-item">
                <h3>${item.title ?? 'Без заголовка'}</h3>
                <p>${item.description ?? ''}</p>
            </div>
        `).join('');
    }
});

function initCountdown(elementId, targetDateStr) {
    var countdownElement = document.getElementById(elementId);
    if (!countdownElement) return;
    var targetDate = new Date(targetDateStr);
    function updateCountdown() {
        var now = new Date();
        var timeDiff = targetDate - now;
        if (timeDiff > 0) {
            var days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
            var hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
            var minutes = Math.floor((timeDiff / (1000 * 60)) % 60);
            var seconds = Math.floor((timeDiff / 1000) % 60);
            countdownElement.innerText = days + "д " + hours + "ч " + minutes + "м " + seconds + "с";
        } else {
            countdownElement.innerText = "Матч начался";
            clearInterval(intervalId);
        }
    }
    updateCountdown();
    var intervalId = setInterval(updateCountdown, 1000);
} 