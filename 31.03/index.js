// const { log } = require('console')
// const http = require('http')
// // import http from 'http'

// const server = http.createServer((req, res) => {
//     if(req.url === '/') {
//         res.statusCode = 200
//         res.setHeader('Content-Type', 'text/plain')
//         res.end('Home page')
//     } else if(req.url === '/about') {
//         res.statusCode = 200
//         res.setHeader('Content-Type', 'text/plain')
//         res.end('About page')
//     } else if(req.url === '/shop') {
//         res.statusCode = 200
//         res.setHeader('Content-Type', 'text/plain')
//         res.end('shop page')
//     } else {
//         res.statusCode = 404
//         res.setHeader('Content-Type', 'text/plain')
//         res.end('Page not found')
//     }
// })

// server.listen(5555, '127.0.0.1', () => {
//     console.log('Server is listening on port http://127.0.0.1:5555/')
// })



// Создание нового файла

// Откройте IDE (например, Visual Studio Code).
// Создайте новый файл и сохраните его с именем `myServer.js`.

// Подключение модуля HTTP

// В начале файла, подключите модуль `http`. Это встроенный модуль в Node.js, который позволяет создавать HTTP серверы.

// Создание сервера

// Используйте метод `createServer` модуля `http` для создания сервера.
// Определите функцию-обработчик, которая будет выполняться каждый раз, когда сервер получает запрос. В этой функции настройте ответ сервера:
// Установите статус ответа (например, 200 для успешного запроса).
// Установите заголовок ответа (например, тип содержимого как `text/plain`).
// Определите текст ответа (например, "Hello, Node.js!").
// Запуск сервера

// Используйте метод `listen` для запуска сервера на определенном порту (например, 3000) и адресе хоста (например, `127.0.0.1`).
// Добавьте сообщение в консоль, чтобы удостовериться, что сервер запущен и слушает запросы.

// 6.   Запуск и проверка сервера

// Откройте терминал или командную строку.
// Запустите сервер командой `node myServer.js`.
// Откройте веб-браузер и перейдите по адресу `http://127.0.0.1:3000/`. Вы должны увидеть сообщение "Hello, Node.js!".


const http = require('http')
const server = http.createServer((req, res)=> {
    if(req.url === '/') {
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/plain')
        res.end('Hello, Node.js!')
    }else if(req.url === '/about') {
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/plain')
        res.end('About page')
    }else  {
        res.statusCode = 404
        res.setHeader('Content-Type', 'text/plain')
        res.end('PAGE NOT FOUND')
    }
})
server.listen(3000, '127.0.0.1',() => {
    console.log('Server is listening on port http://127.0.0.1:3000/')
})