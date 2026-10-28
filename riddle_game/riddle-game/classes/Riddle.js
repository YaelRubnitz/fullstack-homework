import readlineSync from 'readline-sync';

class Riddle {
    constructor(id, name, description, correctAnswer) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.correctAnswer = correctAnswer;
    }

    ask() {
        let flag = false;
        while (!flag) {
            const userAnswer = readlineSync.question(`${this.description}\nYour answer: `);
            if (userAnswer === this.correctAnswer) {
                console.log("Correct!");
                flag = true;
            } else {
                console.log("Wrong answer, try again."); 
            }
        }
    }
}

export default Riddle;
