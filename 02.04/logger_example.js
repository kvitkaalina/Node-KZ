const EventEmitter = require('events'); // Импортируем встроенный модуль 'events'
const logger = new EventEmitter(); // Создаем экземпляр EventEmitter

// Обработчик события "info"
logger.on('info', (message) => {
    console.log('INFO:', message);
});

// Обработчик события "warning"
logger.on('warning', (message) => { 
    console.log('WARNING:', message);
});

// Обработчик события "error"
logger.on('error', (message) => {  
    console.log('ERROR:', message);
});

// Генерируем события
logger.emit('info', 'Программа запущена'); 
logger.emit('warning', 'Низкий уровень заряда батареи');
logger.emit('error', 'Произошла ошибка!');