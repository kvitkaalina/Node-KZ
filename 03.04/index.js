
import fs from 'fs';

// Читаем файл 'input.txt'
fs.readFile('input.txt', 'utf-8', (err, data) => {
    if (err) {
        console.error('Ошибка при чтении файла:', err);
        return;
    }
    console.log('Содержимое файла:', data);

    // Записываем прочитанное содержимое в новый файл 'output.txt'
    fs.writeFile('output.txt', data, 'utf-8', (err) => {
        if (err) {
            console.error('Ошибка при записи файла:', err);
            return;
        }
        console.log('Файл успешно записан');
    });
});
