import fs from 'fs';
import path from 'path'; // <--- זה מה שהיה חסר לך וגרם לשגיאה!


async function fileDetail(filePath) {
    try {
        const data = await fs.promises.readFile(filePath, 'utf8');
        console.log(`File content: ${data}`);
        const stats = await fs.promises.stat(filePath);
        console.log(`File size: ${stats.size} bytes`);
        console.log(`Created at: ${stats.birthtime}`);
    } catch (err) { 
        console.error('Error reading file details:', err.message); // הדפסת הודעת השגיאה
    }
}

// fileDetail('file.txt');

async function countFiles(directoryPath) {
    try {
        const absolutePath = path.resolve(directoryPath);

        const files = await fs.promises.readdir(directoryPath);
        let count = 0;  
        for (const file of files) {
            const filePath = path.join(directoryPath, file);
            const stats = await fs.promises.stat(filePath);
            if (stats.isFile()) {
                count++;
            }
        }
        console.log(`Total files in ${absolutePath}: ${count}`);
    } catch (err) {
        console.error('Error counting files:', err.message);
    }
}

// countFiles('./');

async function countDown(seconds) {
    if (seconds < 0) {
        console.log('Countdown finished!');
        return;
    }
    console.log(seconds);
    setTimeout(() => countDown(seconds - 1), 1000);
}

// countDown(5);

async function rendomLine(path) {
    try{
        let data = await fs.promises.readFile(path, 'utf8');
        let lines = data.split('\n').filter(line => line.trim() !== ''); // Remove empty lines
        let randomIndex = Math.floor(Math.random() * lines.length);
        console.log(`Random line: ${lines[randomIndex]}`);
    }
    catch(err){
        console.error('Error reading file:', err.message);
    }
}

// rendomLine('file.txt');





