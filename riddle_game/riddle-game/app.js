import AllRiddles from "./riddles/index.js";
import readlineSync from 'readline-sync';
import Player from "./classes/Player.js";
import Riddle from "./classes/Riddle.js";

console.log("Hello! Welcome to the Riddle Game!");
let name = readlineSync.question("Please enter your name: ");
const player = new Player(name);
for (let riddleData of AllRiddles) {
    const riddle = new Riddle(riddleData.id, riddleData.name, riddleData.description, riddleData.correctAnswer);
    console.log(`Riddle: ${riddle.name}`);
    const startTime = Date.now();
    riddle.ask();
    const endTime = Date.now();
    player.recordTime(startTime, endTime);
}

player.showState();