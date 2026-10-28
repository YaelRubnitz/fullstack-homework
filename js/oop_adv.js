class MediaItem{
    constructor(title,year, genre){
        this.title = title;
        this.year = year;
        this.genre = genre;
    }

    getSummary(){
        return `${this.title} was released in ${this.year}. Genre: ${this.genre}.`;
    }
}

class Book extends MediaItem{
    constructor(title, year, genre, author, pageCount){
        super(title, year, genre);
        this.author = author;
        this.pageCount = pageCount;
    }

    getSummary(){
        return `Book: ${this.title} Author: ${this.author} Pages: ${this.pageCount}.`;
    }
}

class Movie extends MediaItem{
    constructor(title, year, genre, director, durationMins){
        super(title, year, genre);
        this.director = director;
        this.durationMins = durationMins;
    }

    getSummary(){
        return `Movie: ${this.title} Director: ${this.director} Duration: ${this.durationMins} mins.`;
    }
}

class Liberary{
    constructor(){
        this.items = [];
    }

    addItem(item){
        this.items.push(item);
    }

    search(term){
        return this.items.filter(item => item.title.toLowerCase().includes(term.toLowerCase()));
    }

    listByGenre(genre){
        return this.items.filter(item => item.genre.toLowerCase() === genre.toLowerCase());
    }
}

// Example usage:
// const liberary = new Liberary();

// const book1 = new Book("The Great Gatsby", 1925, "Fiction", "F. Scott Fitzgerald", 218);
// const movie1 = new Movie("Inception", 2010, "Sci-Fi", "Christopher Nolan", 148);

// liberary.addItem(book1);
// liberary.addItem(movie1);

// console.log(liberary.search("great")); // [book1]
// console.log(liberary.listByGenre("Fiction")); // [book1]

class BankAccount{
    constructor(owner, balance){
        this.owner = owner;
        this.balance = balance;
    }

    deposit(amount){
        this.balance += amount;
    }

    withdraw(amount){
        if(amount > this.balance){
            throw new Error("Insufficient funds");
        }
        this.balance -= amount;
    }

}

class Bank{
    constructor(){
        this.accounts = [];
        this.history = [];
    }

    addAccount(account){
        this.accounts.push(account);
    }

    transfer(fromAccount, toAccount, amount){
        fromAccount.withdraw(amount);
        toAccount.deposit(amount);
        this.history.push({from: fromAccount.owner, to: toAccount.owner, amount});
    }

    showAccounts(){
        return this.accounts.map(account => console.log(`${account.owner}: $${account.balance}`));
    }

    showTransactionHistory(){
        return this.history.map(tx => console.log(`From: ${tx.from}, To: ${tx.to}, Amount: $${tx.amount}`));
    }

}

// Example usage:
// const bank = new Bank();
// const account1 = new BankAccount("Alice", 1000);
// const account2 = new BankAccount("Bob", 500);

// bank.addAccount(account1);
// bank.addAccount(account2);

// bank.showAccounts();
// bank.transfer(account1, account2, 200);
// bank.showAccounts();

class Animal{
    constructor(name, species , lastFedTime){
        this.name = name;
        this.species = species;
        this.lastFedTime = lastFedTime;
    }
    feed(){
        this.lastFedTime = new Date();
    }
}

class Carnivore extends Animal{
    constructor(name, species, lastFedTime){
        super(name, species, lastFedTime);
    }

    feed(){
        super.feed();
        console.log(`feeding Carnivore ${this.species} meat served.`);
    }
}

class Herbivore extends Animal{
    constructor(name, species, lastFedTime){
        super(name, species, lastFedTime);
    }

    feed(){
        super.feed();
        console.log(`feeding Herbivore ${this.species} vegetables served.`);
    }
}

class ZooKeeper{
    constructor(){
        this.animals = [];
    }

    addAnimal(animal){
        this.animals.push(animal);
    }

    feedAll(){
        this.animals.forEach(animal => animal.feed());
    }

    getLastFedTimes(name){
        const animal = this.animals.find(animal => animal.name === name);
        if (animal) {
            return `${animal.name} (${animal.species}) was last fed at ${animal.lastFedTime}`;
        } else {
            return `Animal ${name} not found.`;
        }
    }

    getBySpecies(species){
        return this.animals.filter(animal => animal.species.toLowerCase() === species.toLowerCase());
    }

}

// Example usage:
// const zooKeeper = new ZooKeeper();
// const lion = new Carnivore("Leo", "Lion", new Date());
// const elephant = new Herbivore("Ella", "Elephant", new Date());
// zooKeeper.addAnimal(lion);
// zooKeeper.addAnimal(elephant);
// zooKeeper.feedAll();
// console.log(zooKeeper.getLastFedTimes("Leo"));
// console.log(zooKeeper.getBySpecies("Lion"));

const obj = { 
    getName: function(){ return this.name; } ,
    name: "yishai",
}

const obj1 = {
}
obj1.getName = obj.getName
console.log(obj1.getName())
console.log(obj.getName())    