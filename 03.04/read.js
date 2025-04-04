
import fs from 'fs';

try {
    const data = fs.readFileSync('input2.txt', 'utf-8')
    console.log(data);
    fs.writeFileSync('input2.txt', data,'utf-8')
    console.log('File successfully written');
    
} catch (error) {
    console.error('Error', error);
}






