<?php
// Скрипт для обновления данных сайта (новости, матчи, статистика)
// Замените URL_API на реальный эндпоинт вашего источника данных.
$apiUrl = 'https://example.com/api/football-data';

// Получаем данные с API
$response = file_get_contents($apiUrl);
if ($response === false) {
    error_log("Ошибка получения данных от API");
    exit;
}

// Декодируем JSON-ответ
$data = json_decode($response, true);
if ($data === null) {
    error_log("Ошибка декодирования данных JSON");
    exit;
}

// Сохраняем данные в файл для дальнейшего использования (или обновляем базу данных)
$filePath = __DIR__ . '/../data/football_data.json';
if (file_put_contents($filePath, json_encode($data, JSON_PRETTY_PRINT))) {
    echo "Данные успешно обновлены.\n";
} else {
    error_log("Ошибка записи данных в файл");
}
?> 