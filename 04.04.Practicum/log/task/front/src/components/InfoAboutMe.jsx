import React, { useState } from 'react';
import axios from 'axios';

function App() {
    const [data, setData] = useState(null); // Состояние для данных
    const [loading, setLoading] = useState(false); // Состояние для отображения загрузки

    const fetchData = () => {
        setLoading(true); // Включаем индикатор загрузки
        axios.get('http://localhost:5000/api/data')
            .then((response) => {
                setData(response.data.message); // Сохраняем данные в состоянии
            })
            .catch((error) => {
                console.error('Ошибка при запросе к серверу:', error);
            })
            .finally(() => {
                setLoading(false); // Выключаем индикатор загрузки
            });
    };

    return (
        <div>
            <h1>Frontend</h1>
            <button onClick={fetchData}>Получить данные</button>
            {loading && <p>Загрузка...</p>} {/* Показываем "Загрузка" */}
            {data && <p>{data}</p>} {/* Показываем данные */}
        </div>
    );
}

export default App;

