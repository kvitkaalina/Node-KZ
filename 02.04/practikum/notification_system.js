// Импортируем модуль 'events' и модуль 'fs' для записи в файл
const EventEmitter = require('events');
const fs = require('fs'); 

// Создаём экземпляр EventEmitter
const emitter = new EventEmitter();

// Функция для отправки уведомления
const sendNotification = (message, emitter) => {
    emitter.emit('notification', message); // Генерируем событие 'notification' с сообщением
};

// Обработчик для логирования уведомления в консоль
emitter.on('notification', (message) => {
    console.log('Уведомление:', message);
});

// Обработчик для записи уведомления в файл
emitter.on('notification', (message) => {
    fs.appendFile('notifications.log', message + '\n', (err) => {
        if (err) {
            console.error('Ошибка при записи в файл:', err);
        } else {
            console.log('Уведомление записано в файл!');
        }
    });
});

// Вызов функции sendNotification с разными сообщениями
sendNotification('Первое уведомление: Привет!', emitter);
sendNotification('Второе уведомление: У вас новое сообщение.', emitter);
sendNotification('Третье уведомление: Ваш таймер истёк.', emitter);