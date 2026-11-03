import fs from 'fs';
import https from 'https';

// 1
function asyncOperation() {
        return new Promise((resolve, reject) => {
        setTimeout(() => {
        let randomNumber = Math.random();
        if (randomNumber > 0.5) {
        resolve('Promise resolved successfully!');
        } else {
        reject('Promise rejected due to an error.');
        }
    }, 1000);
    });
}

const promise = asyncOperation();
promise.then((message) => {
    console.log(message);
}).catch((error) => {
    console.log('Promise rejected:', error);
});  


// 2

function delayHello(delay, name) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Hello, ${name}!`);
        }, delay);
    });
}

delayHello(2000, 'Alice').then((message) => {
    console.log(message);
} )  

// 3
function readFileContent(path) {
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

const filePath = 'file.txt'; // Replace with your file path
readFileContent(filePath)
    .then((data) => {
        console.log('File content:', data);
    })
    .catch((err) => {
        console.error('Error reading file:', err);
    });

// 4 - like 1


// 5

function raceTimers() {
    const timerPromise1 = new Promise((resolve) => {
        setTimeout(() => {
            resolve('Timer 1 finished first!');
        }, 2000);
    });

    const timerPromise2 = new Promise((resolve) => {
        setTimeout(() => {
            resolve('Timer 2 finished first!');
        }, 1000);
    });

    return Promise.race([timerPromise1, timerPromise2]);
}

raceTimers().then((message) => {
    console.log(message);
});

// 6
function fetchData(url){
    return new Promise((resolve, reject) => {
        https.get(url, (res) => {
            let data = '';
            res.on('data', (chunk) => {
                data += chunk;
            });
            res.on('end', () => {
                resolve(data);
            });
        }).on('error', (err) => {
            reject(err);
        });
    });
}

fetchData('https://jsonplaceholder.typicode.com/todos/1')
    .then((data) => {
        console.log('Fetched data:', data);
    })
    .catch((err) => {
        console.error('Error fetching data:', err);
    });

// 7
function waitAll(){
    let promise1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Promise 1 resolved');
        }, 1000); })
    let promise2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Promise 2 resolved');
        }, 2000); })
    let promise3 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Promise 3 resolved');
        }, 1500); })
    return Promise.all([promise1, promise2, promise3])              
}    

const allPromises = waitAll();
allPromises.then((results) => {
    console.log('All promises resolved:', results);
});

// 8
function checkFileExists(path){
    return new Promise((resolve, reject) => {
        fs.access(path, fs.constants.F_OK, (err) => {
            if (err) {
                reject('File does not exist.'); 
            } else {
                resolve('File exists.');
            }
        });
    });
}

checkFileExists('file.txt')
    .then((message) => {
        console.log(message);
    })
    .catch((err) => {
        console.error(err);
    });
checkFileExists('nonexistent.txt')
    .then((message) => {
        console.log(message);
    })
    .catch((err) => {
        console.error(err);
    });


function chainedGreetings(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Hello');
            resolve(true);
        }, 1000);
    }).then(() => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {  
                console.log('How are you?');
                resolve(true);
            },2000);
        });
    }).then(() => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('Goodbye!');
                resolve(true);
            }, 1000);
        }); 
    })
}

chainedGreetings().then(() => {
    console.log('All greetings done.');
}) 

function processFile(inputPath, outputPath){
    return new Promise((resolve, reject) => {
        fs.readFile(inputPath, 'utf8', (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    }).then((data) => {
        return new Promise((resolve, reject) => {
            const wordCount = data.split(" ").length;
            console.log(`Word count: ${wordCount}`);
            const processedData = `Word count: ${wordCount}\n\n${data}`;
            fs.writeFile(outputPath, processedData, 'utf8', (err) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(`Processed data written to ${outputPath}`);
                }
            });
        });
    }).catch((err) => {
        console.error('Error processing file:', err);
    })
}

processFile('file.txt', 'output.txt').then((message) => {
    console.log(message);
}).catch((err) => {
    console.error('Error:', err);
});

function getUserTitle(userId){

    return new Promise((resolve, reject) => {
        https.get(`https://jsonplaceholder.typicode.com/users/todos/${userId}`, (res) => {
            let data = '';  
            res.on('data', (chunk) => {
                data += chunk;
            });
            res.on('end', () => {
                const userData = JSON.parse(data);
                resolve(userData.title);
            });
        }).on('error', (err) => {
            reject(err);
        });
    });
}

getUserTitle(1).then((title) => {
    console.log(`User title: ${title}`);
}).catch((err) => {
    console.error('Error fetching user title:', err);
})

