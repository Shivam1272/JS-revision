"use strict";  // treat all JS code as newer version

// alert("Hello") // it will throw error because we are using nodejs, not browser

let name = "Shivam"
let age = 21
let isLearning = true

/*
Primitive Data type: (store in Stack memory)
Pass by Value
    number
    bigInt
    string => ""/''
    boolean => true/false
    null => standalone value
    undefined
    symbol => unique
*/

// console.log(typeof undefined);
// console.log(typeof null);

/* 
Non Primitive Store in Heap memory
    Pass by Reference
*/

let myName = "Shivam"
let anotherName = myName
anotherName = "Gangster"

console.log(myName, anotherName);

let userOne = {
    email:"Shivam@gmail.com",
    upi:"user@upi"
}

let userTwo = userOne
userTwo.email = "abc@github.com"

console.log(userOne);
console.log(userTwo);