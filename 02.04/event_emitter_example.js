const EventEmitter = require('events');

const myEmitter = new EventEmitter();

// Подписываемся на событие 'greet'
myEmitter.on('greet', () => console.log('It works!'));

// Вызываем событие 'greet'
myEmitter.emit('greet');
