import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors()); // Разрешить запросы с фронтенда

app.get('/', (req, res) => {
    res.send('Hello Main Page');
});

app.get('/api/data', (req, res) => {
    res.json({ message: 'Привет с сервера!' });
});

app.listen(5000, () => {
    console.log('Server is listening on http://localhost:5000');
});

