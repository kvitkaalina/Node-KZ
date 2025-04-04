// Создайте новый скрипт в вашем проекте, например, `app.js`.

// Импортируйте необходимые модули `fs` и `path` в ваш скрипт.

// Создайте новый каталог с именем `test` в текущей директории с использованием метода `fs.mkdir`.

// После успешного создания каталога, создайте файл с именем `example.txt` внутри каталога `test` и запишите в него текст, например, "Hello, Node.js!" с использованием метода `fs.writeFile`.

// После успешной записи файла, прочитайте содержимое каталога `test` с использованием метода `fs.readdir`.

// Выведите содержимое каталога `test` на консоль.

import fs from 'fs';
import path from 'path';

const dirPath = path.join(process.cwd(), "testDir");

// Создаем каталог
fs.mkdir(dirPath, (err) => {
  if (err) {
    console.error("Ошибка при создании каталога:", err);
    return;
  }
  console.log("Каталог успешно создан");

  const filePath = path.join(dirPath, "example.txt");
  
  // Записываем файл
  fs.writeFile(filePath, "Hello, Node.js!", "utf-8", (err) => {
    if (err) {
      console.error("Ошибка при записи файла:", err);
      return;
    }
    console.log("Файл успешно создан");

    // Читаем содержимое каталога
    fs.readdir(dirPath, (err, files) => {
      if (err) {
        console.error("Ошибка при чтении каталога:", err);
        return;
      }
      console.log("Каталог содержит:", files);
    });
  });
});