// Создайте новый скрипт в вашем проекте. Назовите его, например, `fileOperations.js`.

// Импортируйте необходимые модули в ваш скрипт:
// Модуль `fs` для работы с файловой системой.
// Модуль `path` для работы с путями файлов и каталогов.

// Определите путь к исходному файлу:
// В данном примере используйте файл изображения `example.jpg`, который должен находиться в той же директории, что и ваш скрипт.
// Сформируйте путь к файлу с использованием метода `path.join` и специальной переменной `__dirname`.

// import fs from 'fs';
// import path from 'path';
// import { fileURLToPath } from 'url';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// const originalPath = path.join(__dirname, 'example.jpg');


const fs = require("fs");
const path = require("path");

const originalPath = path.join(__dirname, "cat.jpg");
const renamePath = path.join(__dirname, "cutecat.jpg");
const copiedPath = path.join(__dirname, "copied.jpg");

// Переименование файла
fs.rename(originalPath, renamePath, (err) => {
  if (err) {
    console.error("Error renaming file:", err);
    return;
  }
  console.log("File renamed successfully");

  // Копирование файла
  fs.copyFile(renamePath, copiedPath, (err) => {
    if (err) {
      console.error("Error copying file:", err);
      return;
    }
    console.log("File copied successfully");
  });
});



