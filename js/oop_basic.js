
// ex 1

function Phone(brand,model){
    this.brand = brand
    this.model = model
    this.details = function(){
        console.log(`Ponne ${brand} ${model}`)
    }
}

// let p = new Phone("b", "h")
// p.details()

function Rectangle(width,hight){
    this.width = width
    this.hight = hight
    this.area = function(){
        console.log(`Area: ${hight*width}`)
    }
}

// let r = new Rectangle(2, 3)
// r.area()

function BankAccount(owner,balance){
    this.owner = owner
    this.balance = balance
    this.deposit = function(amount){
        this.balance+= amount;
    }
    this.withdraw = function(amount){
        if(this.balance >= amount){
            this.balance -= amount;
        }
    }

    this.checkBalance = function(){
        console.log(`Balance: ${balance}`)
    }
}



// ex 2

function Animal(name){
    this.name = name;
}

Animal.prototype.speak = function(){console.log(`${this.name} make a sound`)}

function Dog(name){
    Animal.call(this, name);
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.bark = function(){console.log(`${this.name} barks`)}

// let d = new Dog("ff")
// d.speak()
// d.bark()

function Shape(){};
Shape.prototype.area = function(){return 0;}

function Circle(r){
    this.r = r;
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;
Circle.prototype.area = function(){return this.r**2 * Math.PI;}

function Square(side){
    this.side = side;
}

Square.prototype = Object.create(Shape.prototype);
Square.prototype.constructor = Square;
Square.prototype.area = function(){return this.side**2;}

// let ss = new Shape()
// let c = new Circle(6)
// let s = new Square(6) 

// console.log(ss.area())
// console.log(c.area())
// console.log(s.area())


// ex 3

class Book{
    constructor(title, author){
        this.title = title;
        this.author = author;
    }
    info(){
        console.log(`The ${this.title} by ${this.author}`)
    }
}

// let b = new Book("harry", "jk r")
// b.info()

class Person{
    constructor(name){
        this.name = name;
    }
    greet(){console.log(`Hello! im ${this.name}`)}
}

class Student extends Person{
    constructor(name, school){
        super(name);
        this.school = school;
    }

    study(){
        console.log(`${this.name} studys at ${this.school}`)
    }
}

// let s = new Student("yael", "IDF")
// s.greet()
// s.study()

class Employee{
    #salary;
    constructor(salary){
        this.#salary = salary;
    }
    getSalary(){return this.#salary}
    work(){console.log("Employee is working")}
}

class Manager extends Employee{
    constructor(salary){
        super(salary);
    }

    work(){
        console.log("Manager is managing")}
}

// let e = new Employee(4)
// let m = new Manager(8)

// e.work()
// m.work()








