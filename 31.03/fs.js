// const fs = require('fs')

// fs.readFile('example.txt', 'utf-8', (err, data) => {
//     if(err) {
//         console.log('error, no file')
//         return
//     }

//     console.log(data)
// });

// //Создайте новый файл проекта. Откройте ваш редактор кода и создайте новый файл с именем `fileOperations.js`.

// Импортируйте модуль `fs`. В начале файла импортируйте встроенный модуль `fs` (File System).

// Создайте и запишите данные в файл. Используйте метод `writeFile` модуля `fs`, чтобы создать новый файл с именем `example.txt` и записать в него строку текста, например, "Hello, Node.js!".

// Прочитайте содержимое файла. Используйте метод `readFile`, чтобы прочитать содержимое файла `example.txt` и вывести его в консоль.

// Удалите файл. Используйте метод `unlink`, чтобы удалить файл `example.txt`.

// Запустите ваш скрипт. В терминале перейдите в директорию с файлом `fileOperations.js` и выполните команду `node fileOperations.js` для запуска скрипта

const fs = require('fs')
fs.writeFile('example.txt', 'text_text_text', (err) => {
       if(err) {
            console.log('error, no file')
            return
     }

        console.log('file created')
        fs.readFile('example.txt', 'utf-8', (err, date) => {
            if(err) {
                console.log('error, no file')
                return
            }
            console.log('text:', date, )
        })

        fs.unlink('example.txt', (err) => {
            if(err){
                console.log('error, no file')
                return
            }
            console.log('file deleted');
            
        })
    });
