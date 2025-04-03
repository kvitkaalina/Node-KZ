const fs = require('fs');
const path = require('path');

// 1. Создаем исходный файл
fs.writeFile('source.txt', 'Hello', 'utf8', (err) => {
    if (err) {
        console.log('Error creating source file:', err.message);
        return;
    }
    console.log('Source file created successfully');
    
    // 2. Читаем созданный файл
    fs.readFile('source.txt', 'utf8', (err, data) => {
        if (err) {
            console.log('Error reading source file:', err.message);
            return;
        }
        console.log('Content from source.txt:', data);
        
        // 3. Записываем копию
        fs.writeFile('copy.txt', data, 'utf8', (err) => {
            if (err) {
                console.log('Error creating copy file:', err.message);
                return;
            }
            console.log('Copy file created successfully');
            
            // 4. Проверяем копию (читаем copy.txt, а не source.txt)
            // fs.readFile('copy.txt', 'utf8', (err, copiedData) => {
            //     if (err) {
            //         console.log('Error reading copy:', err.message);
            //         return;
            //     }
            //     console.log('Content from copy.txt:', copiedData);
                
                // 5. (Дополнительно) Удаляем исходный файл
                fs.unlink('source.txt', (err) => {
                    if (err) {
                        console.log('Error deleting source file:', err.message);
                        return;
                    }
                    console.log('Source file deleted');
                });
            });
        });
    });
// }); 
