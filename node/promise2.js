import fs from 'fs';
import path from 'path';

function readPromise(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf8', (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}

// readPromise('temp.txt').then(data => {
//     console.log('File content:', data);
// }).catch(err => {
//     console.error('Error reading file:', err);
// })

function readPromis2(path) {
    return fs.promises.readFile(path, 'utf8');
}

// readPromis2('temp.txt').then(data => {
//     console.log('File content:', data);
// }).catch(err => {
//     console.error('Error reading file:', err);
// })


function getMetadata(path) {
    return fs.promises.stat(path);
}

// getMetadata('temp.txt').then(stats => {
//     console.log('File size:', stats.size);
//     console.log('Created at:', stats.birthtime);
//     console.log('Last modified at:', stats.mtime);
// }).catch(err => {
//     console.error('Error getting file metadata:', err);
// })


function fileList(dirPath) {
    return fs.promises.readdir(dirPath);
}

// fileList('.').then(files => {
//     console.log('Files in directory:', files);
// }).catch(err => {
//     console.error('Error reading directory:', err);
// })

async function readFilesInOrder(files) {
    for (const file of files) {
        const content = await fs.promises.readFile(file, 'utf8');
        console.log(content);
    }
}

// readFilesInOrder(['temp.txt', 'temp2.txt']).catch(err => {
//     console.error('Error reading files:', err);
// });


async function readFilesInParallel(files) {
    const readPromises = files.map(file => fs.promises.readFile(file, 'utf8'));
    const contents = await Promise.all(readPromises);
    contents.forEach(content => console.log(content));
}

// readFilesInParallel(['temp.txt', 'log.txt']).catch(err => {
//     console.error('Error reading files:', err);
// });


function checkFileExists(path) {
    return new Promise((resolve, reject) => {
        fs.access(path, fs.constants.F_OK, (err) => {
            if (err) {
                resolve(false);
            } else {
                resolve(true);
            }
        });
    }); 
}

// checkFileExists('temp.txt').then(exists => {
//     if (exists) {
//         console.log('File exists.');
//     } else {
//         console.log('File does not exist.');
//     }
// });


function copyFile(source, destination) {
    return fs.promises.copyFile(source, destination);
}

// copyFile('temp.txt', 'temp_copy.txt').then(() => {
//     console.log('File copied successfully.');
// }).catch(err => {
//     console.error('Error copying file:', err);
// });

function mergeFiles(sourceFiles, destinationFile) {
    const readPromises = sourceFiles.map(file => fs.promises.readFile(file, 'utf8'));
    return Promise.all(readPromises)
        .then(contents => {
            const mergedContent = contents.join('\n');
            return fs.promises.writeFile(destinationFile, mergedContent, 'utf8');
        })
        .then(() => {
            console.log('Files merged successfully into', destinationFile);
        })
        .catch(err => {
            console.error('Error merging files:', err);
        }); 
}

// mergeFiles(['temp.txt', 'log.txt'], 'merged.txt').then(() => {
//     console.log('Merge completed.');
// }).catch(err => {
//     console.error('Error during merge:', err);
// });


async function checkAllFiles(dir, word) {
    const files = await fs.promises.readdir(dir);

    const searchPromises = files.map(async (file) => {
        const filePath = path.join(dir, file);
        
        const stat = await fs.promises.stat(filePath);
        if (!stat.isFile()) return null;

        const content = await fs.promises.readFile(filePath, 'utf8');
        
        if (content.includes(word)) {
            console.log(file); // מדפיס מיד כשמוצא
        }
        return null;
    });

    await Promise.all(searchPromises);
}

// checkAllFiles('.', "Hello!")
