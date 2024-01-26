
let n:number = 101;
console.log(" n: " + n);

n=1010101;
console.log(" n: " + n);

let num:number = 10.505;
let str:string = "ji10";
let bool:boolean = false;

console.log(num,str,bool);


// functions
function add( a:number, b:number):void{
    console.log(" sum ",a,b," = ",a+b);
}

add(10,20);


// interface

interface Person{
    name:string,
    email:string,
    age:number | string,
    isAdult:boolean,
    password:string,
    address?:string // if present then string
}

let user1:Person = {
    name:" jiten",
    email:"jiten@gmail.com",
    age:21,
    isAdult:true,
    password:"12345"
}

console.log("user1: " , user1);
user1.password = "12345654321";
user1.age = "20 november 2001";
console.log("user1: " , user1);


// generic

function myGeneric<T> ( arg: T):T{
    return arg;
}