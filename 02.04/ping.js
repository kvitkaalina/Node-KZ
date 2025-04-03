// Задача по созданию сигнала
// Создаётся экземпляр EventEmitter.
// Регистрируются два обработчика события 'ping':
// один с помощью on,
// другой с помощью once.
// Вызывается событие 'ping' два раза.
// Один из обработчиков удаляется вручную.
// Снова вызывается 'ping'.



const EventEmitter = require('events')
const emitter = new EventEmitter()


const onHandler = () => {
    console.log('Каждый раз я говорю одно и тоже ');
}

const onceHandler = () => {
    console.log('Я это скажу только один раз');
    
}

emitter.on('ping', onHandler)
emitter.once('ping', onceHandler)

console.log('First ping:');
emitter.emit('ping')

console.log('Second ping:');
emitter.emit('ping')

emitter.removeListener('ping', onHandler)

console.log('Удали onHandler ');
emitter.emit('ping')



