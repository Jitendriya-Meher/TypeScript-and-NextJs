"use strict";
let muNum = 20;
// muNum = "121";
console.log("type of muNum :", typeof (muNum));
console.log("muNum: " + muNum);
// array
let myArr = ["jiten", 21, false, true, 201.11];
console.log("my arr: ", myArr);
console.log("type of myArr :", typeof (myArr));
console.log("type of myArr[2] :", typeof (myArr[2]));
let numArr = [1, 12, 21.12, 123.12, 11.11];
console.log("numArr: ", numArr);
console.log("type of numArr :", typeof (numArr));
console.log("type of numArr[2] :", typeof (numArr[2]));
let myArray = [1, 'ji', false, 890.90];
console.log("myArray :", myArray);
// tuple 
let myTuple = [24, "amit", false, 12.34, true];
console.log("myTuple :", myTuple);
// object
let myObj = {
    name: "jiten",
    age: 21,
    email: "jim@gmail",
    password: 'password',
    isAdmin: true
};
console.log("myObj =", myObj);
;
let myObj2 = {
    name: "John",
    age: 21,
    email: "john@gmail.com",
    password: "password"
};
let myObj3 = {
    name: "John",
    age: 21,
    email: "john@gmail.com",
    password: "password",
    isAdmin: false
};
console.log("myObj3 =", myObj3);
// function
let myFunction = (a, b) => {
    return (a + b) * 2;
};
console.log("10,20 = ", myFunction(10, 20));
