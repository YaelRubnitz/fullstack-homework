function sumOdd(arr) {
    return arr.filter((num, index) => index % 2 === 0).reduce((acc, num) => acc + num, 0);
}


function maxMinusMin(arr) {
    if (arr.length === 0) return 0;
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    return max - min;
}

function capitalizeWords(str) {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

function keysAboveX(obj, x) {
    return Object.keys(obj).filter(key => obj[key] > x).length;
}

function reverseArr(arr) {
    let i = 0, j = arr.length - 1;
    while (i < j) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
        i++;
        j--;
    }
}


class Student {
    constructor(name, grades) {
        this.name = name;
        this.grades = grades;
    }
}

function studentPass(students) {
    return students.filter(student => {
        return student.grades >= 60;
    }).length;
}


function productAllExceptCurrent(arr) {
    let pre=1, post=1;
    let prearr=[]
    for (let i = 0; i < arr.length; i++) {
        prearr[i] = pre;
        pre *= arr[i];
    }
    for (let i = arr.length - 1; i >= 0; i--) {
        prearr[i] *= post;
        post *= arr[i];
    }
    return prearr;
}

// let arr = [1, 2, 3, 4];
// console.log(productAllExceptCurrent(arr)); // Output: [24, 12, 8, 6]


function findLongestWord(str) {
    let words = str.split(' ');
    let longestWord = '';
    for (let word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }
    return longestWord;
}

function objectInvert(obj) {
    let inverted = {};
    for (let key in obj) {
        inverted[obj[key]] = key;
    }
    return inverted;
}


class BankAccount {
    constructor(balance) {
        this.balance = balance;
    }
    deposit(amount) {
        if (amount < 0) {
            throw new Error("Deposit amount must be positive");
        }
        this.balance += amount;
    }

    withdraw(amount) {
        if (amount < 0) {
            throw new Error("Withdraw amount must be positive");
        }
        if (amount > this.balance) {
            throw new Error("Insufficient funds");
        }
        this.balance -= amount;
    }
}
