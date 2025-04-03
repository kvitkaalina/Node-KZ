const express = require('express');
const app = express();
const port = 3001;

// Маршруты
app.get('/', (req, res) => {
    res.send('Главная страница');
});

app.get('/about', (req, res) => {
    res.send('О нас');
});

app.get('/shop', (req, res) => {
    res.send('Магазин');
});

// Запуск сервера
app.listen(port, () => {
    console.log(`Сервер запущен на http://localhost:${port}`);
});