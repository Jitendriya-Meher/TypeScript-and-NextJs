"use strict";
class Car {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }
    start() {
        console.log(`${this.brand} ${this.model} is starting...`);
    }
}
let myCar1 = new Car("Toyota", "Camry");
let myCar2 = new Car("Honda", "Accord");
myCar1.start();
myCar2.start();
class SportsCar extends Car {
    constructor(brand, model, acc) {
        super(brand, model);
        this.acc = acc;
    }
    accelerate() {
        console.log(`${this.brand} ${this.model} is accelerating... at ${this.acc} km/hrs`);
    }
}
let myCar3 = new SportsCar("Honda", "Accord", 150.508);
myCar3.accelerate();
class Person {
    constructor(name, password) {
        this.name = name;
        this.password = password;
    }
    sayHello() {
        console.log(`hii ${this.name}`);
    }
    showDetails() {
        console.log(`name: ${this.name}, password: ${this.password}`);
    }
    changePassword(password) {
        this.password = password;
    }
}
let p1 = new Person("jiten", '1234');
p1.sayHello();
p1.showDetails();
p1.changePassword("1234567890");
p1.showDetails();
class Male extends Person {
    sayHello() {
        console.log(`hii mrs. ${this.name}`);
    }
}
let p2 = new Male("jiten", '1234');
p2.sayHello();
class Animal {
    speak() {
        console.log("animal is speaking...");
    }
}
class Dog extends Animal {
    speak() {
        console.log("dog is speaking...");
    }
}
class Cat extends Animal {
    speak() {
        console.log("cat is speaking...");
    }
}
let ani = new Animal();
ani.speak();
let dog = new Dog();
dog.speak();
let cat = new Cat();
cat.speak();
class Shape {
    getInfo() {
        return "This is a shape";
    }
}
class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    draw() {
        console.log(`drawing circle of radius ${this.radius}`);
    }
}
class Square extends Shape {
    constructor(length) {
        super();
        this.length = length;
    }
    draw() {
        console.log(`drawing square of length ${this.length}`);
    }
}
let cir = new Circle(12.45);
cir.draw();
let sqr = new Square(10.25);
sqr.draw();
