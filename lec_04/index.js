"use strict";
let bigInt = 11189287567827n;
console.log("bigInt: " + bigInt);
// any
let value;
console.log("value: ", value);
console.log("type of value: "),
    value = "hello world";
console.log("value: ", value);
console.log("type of value: ", typeof (value));
value = 21;
console.log("value: ", value);
console.log("type of value: ", typeof (value));
value = false;
console.log("value: ", value);
console.log("type of value: ", typeof (value));
console.log();
// unknown
let val;
console.log("val : ", val);
console.log("type of val : ", typeof (val));
val = 'jiten';
console.log("val : ", val);
console.log("type of val : ", typeof (val));
val = 21;
console.log("val : ", val);
console.log("type of val : ", typeof (val));
if (typeof (val) === 'number') {
    console.log("val is a number");
}
else if (typeof (val) === 'string') {
    console.log("val is a string");
}
else if (typeof (val) === 'boolean') {
    console.log("val is a boolean");
}
else {
    console.log("val not found");
}
console.log();
// undefined
let undef;
// undef = 12;  // undefined can't have anything
undef = undefined;
console.log("undef : ", undef);
console.log();
// null
let nl;
// nl = 21;
nl = null;
console.log("null : ", nl);
nl = 21;
console.log("null : ", nl);
console.log();
;
let p1 = {
    name: "John",
    age: 21,
    email: "john@example.com",
    phone: "123"
};
console.log("p1 : ", p1);
let p2 = {
    name: "jiten",
    age: 21,
    email: "jiten@example.com",
    phone: 1234567890
};
console.log("p2 : ", p2);
let p3 = {
    name: "blank",
    age: 0,
    email: "blank@example.com"
};
console.log("p3 : ", p3);
let add = (a, b) => a + b;
let sub = (a, b) => a - b;
let mul = (a, b) => a * b;
let div = (a, b) => a / b;
console.log(add(121, 909));
console.log(sub(121, 909));
console.log(mul(121, 909));
console.log(div(121, 909));
const sqr = {
    color: "red",
    length: 10
};
console.log("sqr :", sqr);
const cir = {
    color: "green",
    radius: 101
};
console.log("cir :", cir);
// array
let arr = ["21car", 22, 34, 56, false, true, null, undefined];
console.log("arr :", arr);
arr.push("end");
console.log("arr :", arr);
arr.pop();
console.log("arr :", arr);
// remove the first element
arr.shift();
console.log("arr :", arr);
// push at first 
arr.unshift("start");
console.log("arr :", arr);
// delete 3 elements starting from index 2
arr.splice(2, 3);
console.log("arr :", arr);
// insert 2 element at index 2
arr.splice(2, 0, "insert 1", "insert 2");
console.log("arr :", arr);
// for each loop
arr.forEach((ele, index) => {
    console.log("index :", index, " = ", ele, "  ", arr[index]);
});
let u1 = {
    name: "jiten",
    age: 22,
    address: {
        city: "khariar",
        state: "odisha"
    },
    greet: function () {
        console.log(`Hii: ${this.name}`);
    }
};
console.log("user 1 :", u1);
u1.greet();
// enum
var Colors;
(function (Colors) {
    Colors[Colors["Red"] = 0] = "Red";
    Colors[Colors["Green"] = 1] = "Green";
    Colors[Colors["Blue"] = 2] = "Blue";
})(Colors || (Colors = {}));
;
let jitenColor = Colors.Red;
console.log("jitenColor", jitenColor);
console.log("jitenColor", Colors[jitenColor]);
