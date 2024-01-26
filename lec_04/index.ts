
let bigInt:bigint = 11189287567827n;
console.log("bigInt: " + bigInt);

// any
let value:any ;
console.log("value: " , value);
console.log("type of value: ") ,
value= "hello world";
console.log("value: " , value);
console.log("type of value: " , typeof(value));
value = 21;
console.log("value: " , value);
console.log("type of value: " , typeof(value));
value = false;
console.log("value: " , value);
console.log("type of value: " , typeof(value));

console.log();

// unknown
let val:unknown;
console.log("val : ", val);
console.log("type of val : ", typeof (val));
val = 'jiten';
console.log("val : ", val);
console.log("type of val : ", typeof (val));
val = 21;
console.log("val : ", val);
console.log("type of val : ", typeof (val));

if( typeof(val) === 'number'){
    console.log("val is a number");
}
else if( typeof(val) === 'string'){
    console.log("val is a string");
}
else if( typeof(val) === 'boolean'){
    console.log("val is a boolean");
}
else {
    console.log("val not found");
}

console.log();

// undefined
let undef:undefined;
// undef = 12;  // undefined can't have anything
undef = undefined;
console.log("undef : ",undef);

console.log();

// null
let nl:null|string|number;
// nl = 21;
nl=null;
console.log("null : ",nl);
nl=21;
console.log("null : ",nl);

console.log();

// interface

interface Person{
    name:string;
    age:number;
    email:string;
    phone?:string|number;
};

let p1:Person = {
    name: "John",
    age: 21,
    email: "john@example.com",
    phone: "123"
};
console.log("p1 : ",p1);

let p2:Person = {
    name:"jiten",
    age: 21,
    email:"jiten@example.com",
    phone:1234567890
}
console.log("p2 : ",p2);

let p3:Person = {
    name:"blank",
    age:0,
    email: "blank@example.com"
};
console.log("p3 : ",p3);


interface Calculate{
    (a:number,b:number):number;
}

let add:Calculate = (a,b) => a + b;
let sub:Calculate = (a:number,b:number):number => a-b;
let mul:Calculate = (a:number,b:number):number => a * b;
let div:Calculate = (a:number,b:number):number =>  a/b;

console.log(add(121,909));
console.log(sub(121,909));
console.log(mul(121,909));
console.log(div(121,909));


interface Shape{
    color:string;
}

interface Square extends Shape{
    length:number;
}

interface Circle extends Shape{
    radius:number;
}

const sqr:Square = {
    color:"red",
    length:10
};
console.log("sqr :",sqr);

const cir:Circle = {
    color:"green",
    radius:101
}

console.log("cir :",cir);

// array
let arr:Array<any> = ["21car",22,34,56,false,true,null,undefined];

console.log("arr :",arr);

arr.push("end");
console.log("arr :",arr);

arr.pop();
console.log("arr :",arr);

// remove the first element
arr.shift();
console.log("arr :",arr);

// push at first 
arr.unshift("start");
console.log("arr :",arr);

// delete 3 elements starting from index 2
arr.splice(2,3);
console.log("arr :",arr);

// insert 2 element at index 2
arr.splice(2,0,"insert 1","insert 2");
console.log("arr :",arr);

// for each loop
arr.forEach( (ele:any,index:number) =>{
    console.log("index :",index, " = ",ele,"  ",arr[index]);
});

// nested objects

interface User{
    name:string;
    age:number;
    address:{
        street?:string;
        city:string;
        state:string;
    };
    greet: () => void;
}

let u1:User = {
    name:"jiten",
    age:22,
    address:{
        city:"khariar",
        state:"odisha"
    },
    greet: function(){
        console.log(`Hii: ${this.name}`);
    }
}

console.log("user 1 :",u1);
u1.greet();

// enum

enum Colors{
    Red,
    Green,
    Blue
};

let jitenColor = Colors.Red;
console.log("jitenColor", jitenColor);
console.log("jitenColor", Colors[jitenColor]);