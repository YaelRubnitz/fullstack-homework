// import fs from 'fs';
// import path from 'path';
// import os from 'os';


// function appendLog(path, data, callback) {
//     fs.appendFile(path, data + '\n', (err) => {
//         if (err) {
//             callback(err);
//         } else {
//             callback(null, 'Data appended successfully.');
//         }
//     });
// }

// // const LOG_PATH = 'log.txt';
// // const date = new Date().toISOString();
// // appendLog(LOG_PATH, `Log entry at ${date}`, (err, message) => {
// //     if (err) {
// //         console.error('Error appending log:', err.message);
// //     } else {
// //         console.log(message);
// //     }
// // });

// function makeBackup(path, callback) {
//     fs.access(path, fs.constants.F_OK, (err) => {
//         if (err) {
//             fs.mkdir(path, { recursive: true }, (mkdirErr) => {
//                 if (mkdirErr) {
//                     callback(mkdirErr);
//                 } 
//                 else {
//                     callback(null, 'Backup directory created and backup made.');
//                 }
//             });
//         } else {
//             callback(null, 'Backup exists.');
//         }
//     });
// }

// // const PATH = 'C:\\Users\\User\\Desktop\\fullstack_cource\\practice\\node';

// // const backupFolder = path.join(PATH, 'backup');

// // makeBackup(backupFolder, (err, message) => {
// //     if (err) {
// //         console.error('Error:', err.message);
// //     } else {
// //         console.log(message);
// //     }
// // });


// function deleteFile(path, callback) {
//     fs.access(path, fs.constants.F_OK, (err) => {
//         if (err) {
//             callback(null, 'file does not exist.');
//         }
//         else{
//             fs.unlink(path, (unlinkErr) => {
//                 if (unlinkErr) {
//                     callback(unlinkErr);
//                 } else {
//                     callback(null, 'File deleted successfully.');
//                 }
//             });
//         }
//     });
// }

// // const FILE_PATH = 'C:\\Users\\User\\Desktop\\fullstack_cource\\practice\\node\\temp.txt';

// // deleteFile(FILE_PATH, (err, message) => {
// //     if (err) {
// //         console.error('Error deleting file:', err.message);
// //     } else {
// //         console.log(message);
// //     }
// // });


// function getCpuInfo(callback){
//     const cpuInfo = os.cpus();
//     if (!cpuInfo || cpuInfo.length === 0) {
//         callback('No CPU information available.');
//     }else {
//         callback(null, cpuInfo);
//     }
// }

// // getCpuInfo((err, cpuInfo) => {
// //     if (err) {
// //         console.error('Error getting CPU info:', err.message);
// //     } else {
// //         for (let i = 0; i < cpuInfo.length; i++) {
// //             console.log(`CPU ${i}: ${cpuInfo[i].model}`);
// //         }
// //     }
// // });

// function threeMessages() {
//     setTimeout(() => {
//         console.log('This message 1.');
//         setTimeout(() => {
//             console.log('This message 2.');
//             setTimeout(() => {
//                 console.log('This message 3.');
//             }, 1000);
//         }, 1000);
//     }, 1000);
// }

// // threeMessages();

// function SumFileSizes(filePath, callback) {
//     fs.readdir(filePath, (err, files) => {
//         if (err) {
//             return callback(err);
//         }
//         if (files.length === 0) {
//             return callback(null, 0);
//         }
//         let totalSize = 0;
//         let completedCount = 0;
//         let hasError = false;

//         for (const file of files) {
//             const fullPath = path.join(filePath, file);

//             fs.lstat(fullPath, (statErr, stats) => {
//                 if (hasError) return;

//                 if (statErr) {
//                     hasError = true;
//                     return callback(statErr);
//                 }

//                 if (stats.isFile()) {
//                     totalSize += stats.size;
//                 }

//                 completedCount++;

//                 if (completedCount === files.length) {
//                     callback(null, totalSize);
//                 }
//             });
//         }
//     });
// }

// // SumFileSizes('C:\\Users\\User\\Desktop\\fullstack_cource\\practice\\node', (err, totalSize) => {
// //     if (err) {
// //         console.error('Error:', err.message);
// //     } else {
// //         console.log('Total size:', totalSize);
// //     }
// // });


// function fileEnding(filePath,ending, callback) {
//     fs.access(filePath, fs.constants.F_OK, (err) => {
//         if (err) {
//             callback(err);
//         } else {
//             const ext = path.extname(filePath);
//             if (ext !== ending) {
//                 callback(null, 'File does not have the expected ending.');
//             } else {
//                 callback(null, `File has the expected ending: ${ext}`);
//             }
//         }
//     });
// }

// // fileEnding('C:\\Users\\User\\Desktop\\fullstack_cource\\practice\\node\\log.txt','.txt', (err, message) => {
// //     if (err) {
// //         console.error('Error:', err);
// //     } else {
// //         console.log(message);
// //     }
// // });


// function runningTime(callback) {
//     const running = os.uptime();
//     if (running === undefined) {
//         callback('Unable to retrieve running time.');
//     }else {
//         callback(null, running);
//     }
// }

// // runningTime((err, running) => {
// //     if (err) {
// //         console.error('Error:', err);
// //     } else {
// //         console.log('System running time (in seconds):', running);
// //     }})


// function rendomCount() {
//     setTimeout(() => {
//         console.log('3');
//         setTimeout(() => {
//             console.log('2');
//             setTimeout(() => {
//                 console.log('1');
//                 setTimeout(() => {
//                     console.log('0');
//                 }, Math.floor(Math.random() * 1000));   
//             }, Math.floor(Math.random() * 1000));
//         }, Math.floor(Math.random() * 1000));
//     }, Math.floor(Math.random() * 1000));
// }

// // rendomCount();


// function findAndWrite(filePath,message, callback) {
//     fs.access(filePath, fs.constants.F_OK, (err) => {
//         if (err) {
//             fs.writeFile(filePath, message, (writeErr) => {
//                 if (writeErr) {
//                     callback(writeErr);
//                 }else {
//                     callback(null, 'File created and written successfully.');
//                 }
//             });
//         } else {
//             callback(null, 'File already exists.');
//         }
//     });
// }   

// // const FILE_PATH = 'C:\\Users\\User\\Desktop\\fullstack_cource\\practice\\node\\temp.txt';
// // const MESSAGE = 'Hello! node.js.';

// // findAndWrite(FILE_PATH, MESSAGE, (err, message)=> {
// //     if (err) {
// //         console.error('Error:', err.message);
// //     } else {
// //         console.log(message);
// //     }
// // });


import fs from 'fs';
import path from 'path';
import os from 'os';

// 1. הוספת לוג לקובץ
function appendLog(filePath, data, callback) {
    fs.appendFile(filePath, data + '\n', (err) => {
        if (err) return callback(err);
        callback(null, 'Data appended successfully.');
    });
}

// 2. יצירת גיבוי / תיקייה (שימוש ב-recursive חוסך את ה-fs.access המיותר!)
function makeBackup(dirPath, callback) {
    fs.mkdir(dirPath, { recursive: true }, (err) => {
        if (err) return callback(err);
        callback(null, 'Backup directory created or already exists.');
    });
}

// 3. מחיקת קובץ (מנסים ישר למחוק ומטפלים בשגיאה אם הקובץ לא קיים)
function deleteFile(filePath, callback) {
    fs.unlink(filePath, (err) => {
        if (err) {
            // אם הקובץ פשוט לא קיים, אפשר להחזיר הודעה נקייה במקום שגיאת מערכת
            if (err.code === 'ENOENT') {
                return callback(null, 'File does not exist.');
            }
            return callback(err);
        }
        callback(null, 'File deleted successfully.');
    });
}

// 4. מידע על המעבד
function getCpuInfo(callback) {
    const cpuInfo = os.cpus();
    if (!cpuInfo || cpuInfo.length === 0) {
        return callback(new Error('No CPU information available.'));
    }
    callback(null, cpuInfo);
}

// 5. שלוש הודעות (נקי יותר בלי קינון עמוק)
function threeMessages() {
    setTimeout(() => {
        console.log('This message 1.');
        setTimeout(() => {
            console.log('This message 2.');
            setTimeout(() => {
                console.log('This message 3.');
            }, 1000);
        }, 1000);
    }, 1000);
}

// 6. סיכום גדלי קבצים בתיקייה (הקוד המעולה שלך כפי שהוא!)
function sumFileSizes(dirPath, callback) {
    fs.readdir(dirPath, (err, files) => {
        if (err) return callback(err);
        if (files.length === 0) return callback(null, 0);

        let totalSize = 0;
        let completedCount = 0;
        let hasError = false;

        for (const file of files) {
            const fullPath = path.join(dirPath, file);

            fs.lstat(fullPath, (statErr, stats) => {
                if (hasError) return;

                if (statErr) {
                    hasError = true;
                    return callback(statErr);
                }

                if (stats.isFile()) {
                    totalSize += stats.size;
                }

                completedCount++;

                if (completedCount === files.length) {
                    callback(null, totalSize);
                }
            });
        }
    });
}

// 7. בדיקת סיומת קובץ
function fileEnding(filePath, ending, callback) {
    const ext = path.extname(filePath);
    if (ext !== ending) {
        return callback(null, 'File does not have the expected ending.');
    }
    callback(null, `File has the expected ending: ${ext}`);
}

// 8. זמן פעילות מערכת
function runningTime(callback) {
    const running = os.uptime();
    if (running === undefined) {
        return callback(new Error('Unable to retrieve running time.'));
    }
    callback(null, running);
}

// 9. ספירה אקראית (גרסה נקה ורקורסיבית במקום קינון מכוער)
function randomCount(currentNum = 3) {
    console.log(currentNum);
    if (currentNum === 0) return;

    const randomDelay = Math.floor(Math.random() * 1000);
    setTimeout(() => {
        randomCount(currentNum - 1);
    }, randomDelay);
}

// 10. יצירת קובץ וכתיבה אליו (כתיבה ישירה שמטפלת במצב שהקובץ קיים)
function findAndWrite(filePath, message, callback) {
    // flag 'wx' נכשל אוטומטית אם הקובץ כבר קיים, וכך נמנע דריסה מיותרת
    fs.writeFile(filePath, message, { flag: 'wx' }, (err) => {
        if (err) {
            if (err.code === 'EEXIST') {
                return callback(null, 'File already exists.');
            }
            return callback(err);
        }
        callback(null, 'File created and written successfully.');
    });
}