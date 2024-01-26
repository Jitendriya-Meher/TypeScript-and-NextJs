let muNum:number = 20;
// muNum = "121";
console.log("type of muNum :",typeof(muNum));
console.log("muNum: " + muNum);

// array
let myArr:(string|number|boolean)[] = ["jiten",21,false,true,201.11];
console.log("my arr: " , myArr);
console.log("type of myArr :",typeof(myArr));
console.log("type of myArr[2] :",typeof(myArr[2]));

let numArr: number[] = [1,12,21.12,123.12,11.11];
console.log("numArr: " , numArr);
console.log("type of numArr :",typeof(numArr));
console.log("type of numArr[2] :",typeof(numArr[2]));

let myArray:Array<number|string|boolean> = [1,'ji',false,890.90];
console.log("myArray :",myArray);


// tuple 

let myTuple:[number,string,boolean,number,boolean] = [24,"amit",false,12.34,true];
console.log("myTuple :",myTuple);

// object

let myObj:{
    name:string,
    age:number,
    email:string,
    password:string,
    isAdmin?:boolean
} = {
    name:"jiten",
    age:21,
    email:"jim@gmail",
    password:'password',
    isAdmin:true
};
console.log("myObj =",myObj);

interface Person{
    name:string,
    age:number,
    email:string,
    password:string,
    isAdmin?:boolean
};

let myObj2:Person = {
    name:"John",
    age:21,
    email:"john@gmail.com",
    password:"password"
};

let myObj3:Person = {
    name:"John",
    age:21,
    email:"john@gmail.com",
    password:"password",
    isAdmin:false
};
console.log("myObj3 =",myObj3);

// function

let myFunction:(a:number, b:number) => number = (a:number,b:number) => {
    return (a+b)*2;
}

console.log("10,20 = ",myFunction(10,20));

// big int

// let bigInt:bigint = 1234567890098754321;
// console.log("bigInt =",bigInt);