// Импортируем модуль 'events' и создаём экземпляр EventEmitter
const EventEmitter = require('events');
const emitter = new EventEmitter();

// Функция countdown
const countdown = (seconds, emitter) => {
    let remainingTime = seconds;

    // Устанавливаем интервал, который срабатывает каждую секунду
    const intervalId = setInterval(() => {
        if (remainingTime > 0) {
            // Генерируем событие 'tick' с оставшимся временем
            emitter.emit('tick', remainingTime);
            remainingTime--;
        } else {
            // Генерируем событие 'end' при достижении нуля
            emitter.emit('end');
            clearInterval(intervalId); // Останавливаем интервал
        }
    }, 1000); // Выполняется каждую секунду
};

// Регистрируем обработчик для события 'tick'
emitter.on('tick', (timeLeft) => {
    console.log(`Осталось времени: ${timeLeft} секунд`);
});

// Регистрируем обработчик для события 'end'
emitter.on('end', () => {
    console.log('Таймер завершён!');
});

// Вызываем функцию countdown
countdown(5, emitter); // Таймер на 5 секунд