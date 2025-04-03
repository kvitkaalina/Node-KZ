// Создайте новый файл с именем `once_example.js`.

// В этом файле создайте экземпляр EventEmitter.

// Зарегистрируйте одноразовый обработчик события.

// Сгенерируйте событие несколько раз и убедитесь, что обработчик сработал только один раз.

const  EventEmitter = require('events')
const emitter = new EventEmitter

emitter.once('hello', (data) => {
    console.log('once_handler ', data);
    
})

emitter.emit('hello', 'Alina')
emitter.emit('hello')
