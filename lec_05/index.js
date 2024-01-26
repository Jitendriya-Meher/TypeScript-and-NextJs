"use strict";
function greet(name, message = "ask me something") {
    return "Hello " + name + " . " + message;
}
let a = greet("Jitendriya", "How are you?");
console.log(a);
let b = greet("Jitendriya");
console.log(b);
function sum(...num) {
    let s = 0;
    num.forEach((n) => {
        s += n;
    });
    return s;
}
let s1 = sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log("sum 1 =", s1);
// arrow functions
const multiply = (x, y) => x * y;
console.log(multiply(20, 501));
function combine(a, b) {
    if (typeof (a) === "number" && typeof (b) === "number") {
        return a + b;
    }
    else if (typeof (a) === "string" && typeof (b) === "string") {
        return a + b;
    }
    else {
        throw new Error("Parameters must be a string or number");
    }
}
console.log(combine(19, 91));
console.log(combine("jiten ", "hii"));
let age1 = 30;
console.log("age1 = ", age1);
// union 
let age2 = '768';
console.log(age2);
age2 = 789;
console.log(age2);
let pm1 = {
    name: "ji10"
};
console.log("pm1", pm1);
let pm2 = {
    empId: "ji10",
    name: "jiten"
};
console.log("pm2", pm2);
// generics
function reverseArray(myarr) {
    return myarr.reverse();
}
let arr1 = reverseArray([1, 2, 3, 4, 5]);
console.log("arr1", arr1);
function makePair(first, second) {
    return [...first, ...second];
}
let arr2 = makePair([1, 2, 3, 4], ['a', 'b', 'c']);
console.log("arr2", arr2);
// class
class Box {
    constructor(value) {
        this.value = value;
    }
    getValue() {
        return this.value;
    }
}
let numBox = new Box(10);
console.log(numBox.getValue());
let stringBox = new Box("ji10");
console.log(stringBox.getValue());
