class Player {
    constructor(name) {
        this.name = name;
        this.times=[];
    }

    recordTime(start, end) {
        if (end > start) {
            const timeTaken = end - start;
            this.times.push(timeTaken);
        }
    }

    showState() {
        let totalTime = this.times.reduce((acc, time) => acc + time, 0);
        let avgTime = this.times.length > 0 ? totalTime / this.times.length : 0;
        console.log(`Player: ${this.name}`);
        console.log(`Total Time: ${totalTime} ms`);
        console.log(`Average Time: ${avgTime.toFixed(2)} ms`);
    }

}

export default Player;