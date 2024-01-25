
class Car{

    brand:string;
    model:string;

    constructor( brand:string, model:string){
        this.brand = brand;
        this.model = model;
    }

    start():void{
        console.log(`${this.brand} ${this.model} is starting...`);
    }
}

let myCar1 = new Car("Toyota","Camry");
let myCar2 = new Car("Honda","Accord");

myCar1.start();
myCar2.start();


class SportsCar extends Car{

    acc:number;

    constructor( brand:string, model:string, acc:number){
        super(brand,model);
        this.acc = acc;
    }

    accelerate():void{
        console.log(`${this.brand} ${this.model} is accelerating... at ${this.acc} km/hrs`);
    }
}

let myCar3 = new SportsCar("Honda","Accord",150.508);

myCar3.accelerate();


class Person{

    public name:string;
    private password:string;

    constructor( name:string, password:string){
        this.name = name;
        this.password = password;
    }

    sayHello():void{
        console.log(`hii ${this.name}`);
    }

    showDetails():void{
        console.log(`name: ${this.name}, password: ${this.password}`);
    }

    changePassword(password:string):void{
        this.password = password;
    }
}

let p1 = new Person("jiten",'1234');

p1.sayHello();
p1.showDetails();
p1.changePassword("1234567890");
p1.showDetails();

class Male extends Person{
    sayHello(): void {
        console.log(`hii mrs. ${this.name}`);
    }
}

let p2 = new Male("jiten",'1234');
p2.sayHello();


class Animal{
    speak(): void {
        console.log("animal is speaking...");
    }
}

class Dog extends Animal{
    speak(): void {
        console.log("dog is speaking...");
    }
}

class Cat extends Animal{
    speak(): void {
        console.log("cat is speaking...");
    }
}

let ani = new Animal();
ani.speak();

let dog = new Dog();
dog.speak();

let cat = new Cat();
cat.speak();



abstract class Shape{
    abstract draw(): void;

    getInfo(): string{
        return "This is a shape";
    }
}

class Circle extends Shape{

    radius:number;

    constructor(radius:number){
        super();
        this.radius = radius;
    }

    draw(): void {
        console.log(`drawing circle of radius ${this.radius}`);
    }
}

class Square extends Shape{

    length:number;

    constructor(length:number){
        super();
        this.length = length;
    }

    draw(): void {
        console.log(`drawing square of length ${this.length}`);
    }
}

let cir = new Circle(12.45);
cir.draw();

let sqr = new Square(10.25);
sqr.draw();