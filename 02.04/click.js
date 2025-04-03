// Создай EventEmitter, который регистрирует событие 'log' и выводит в консоль сообщение, переданное как аргумент.
// 2. Симулируй клики мыши.
// Создай обработчик события 'click', который считает и выводит количество кликов.
// Дополнительно: После 5 кликов отключи обработчик с помощью off.

// Teacher03  кому  Все 11:36 (Отредактировано)
// Рекомендации по кликеру. Создать начальный Стейт, который будете увеличивать count ++, так же нужна проверка, что если счетчик больше или равен 5 , то отключаем его (emmiter.off(handlerToRemove))

// Teacher03 11:37
// Рекомендую всю логику делать в слушателе

const EventEmitter = require('events');
const emitter = new EventEmitter();

// 1. Логирование (сработает сразу)
emitter.on('log', (message) => {
    console.log('LOG:', message);
});
emitter.emit('log', 'Программа запущена!'); // Выведется сразу

// 2. Клики (сработают в цикле)
let clickCount = 0;

const clickHandler = () => {
    clickCount++;
    console.log(`Клик номер: ${clickCount}`);

    if (clickCount >= 5) {
        console.log('Отключаю обработчик кликов...');
        emitter.off('click', clickHandler); // Отписываемся после 5 кликов
    }
};

emitter.on('click', clickHandler); // Подписываемся на клики

// Симулируем 7 кликов (но сработают только 5)
for (let i = 0; i < 7; i++) {
    emitter.emit('click');
}