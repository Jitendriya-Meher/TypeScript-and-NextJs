
function greet( name:string, message:string="ask me something"):string{

    return "Hello "+name+" . "+message;

}

let a:string = greet("Jitendriya","How are you?");
console.log(a);

let b:string = greet("Jitendriya");
console.log(b);

function sum( ...num:number[]):number{
    let s=0;
    num.forEach((n:number) => {
        s+=n;
    });
    return s;
}

let s1 = sum(1,2,3,4,5,6,7,8,9,10);
console.log("sum 1 =",s1);

// arrow functions

const multiply = (x:number, y:number):number => x*y;
console.log(multiply(20,501));

// function overloading 

function combine(a:number, b:number):number;
function combine(a:string, b:string):string;

function combine(a:any, b:any):any{
    if( typeof(a) === "number" && typeof(b) === "number"){
        return a+b;
    }
    else if( typeof(a) === "string" && typeof(b) === "string"){
        return a+b;
    }
    else{
        throw new Error("Parameters must be a string or number");
    }
}

console.log(combine(19,91));
console.log(combine("jiten ","hii"));
// console.log(combine(12,"ji"));

// type aliases

type Age = number;

let age1:Age = 30;
console.log("age1 = " , age1);

// union 

let age2:number|string = '768';
console.log(age2);
age2=789;
console.log(age2);

// intersection 

type Person = {
    name:string;
}

type Employee = {
    name:string;
    empId:string;
}

type pmu = Person | Employee;
type pmi = Person & Employee;

let pm1:pmu ={
    name:"ji10"
}

console.log("pm1",pm1);

let pm2:pmi ={
    empId:"ji10",
    name:"jiten"
}

console.log("pm2",pm2);

// generics

function reverseArray<T> ( myarr:T[]) : T[]{
    return myarr.reverse();
}

let arr1 = reverseArray<number>([1,2,3,4,5]);
console.log("arr1",arr1);


function makePair<T,U> (first:T[], second:U[]):(T|U)[]{

    return [...first, ...second];
}

let arr2 = makePair([1,2,3,4],['a', 'b', 'c']);
console.log("arr2",arr2);

// class

class Box<T> {
    private value:T;

    constructor(value:T) {
        this.value = value;
    }

    getValue():T {
        return this.value;
    }
}

let numBox = new Box<number>(10);
console.log(numBox.getValue());

let stringBox = new Box<string>("ji10");
console.log(stringBox.getValue());