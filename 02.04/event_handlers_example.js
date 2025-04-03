const EventEmitter = require('events'); // Импортируем встроенный модуль 'events'
const emitter = new EventEmitter(); // Создаем экземпляр EventEmitter
const firstHandler = (data) => {
    console.log('First Event ', data);
}
const secondHandler =  (data) => {
    console.log('Second Event ', data);
}

// Подписываемся на событие 'testEvent'
emitter.on('testEvent',firstHandler);

emitter.on('testEvent', secondHandler);

emitter.removeListener('testEvent', secondHandler)

// Генерируем (вызываем) событие 'testEvent'
emitter.emit('testEvent', 'Hello world' );

