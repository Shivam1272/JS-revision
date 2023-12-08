// let score = "49abc"
// let score = null
// let score = undefined
let score = true

// console.log(typeof score);
// console.log(typeof(score));

let scoreInnNumber = Number(score)
// console.log(typeof scoreInnNumber);
// console.log(scoreInnNumber);

/* 
    "33" => 33
    "33abc" => NaN(Not a Number)
    true/false => 1 / 0
    null => 0
    undefined => NaN
*/


// let isLoggedIn = 1
// let isLoggedIn = "Shivam"
// let isLoggedIn = null
let isLoggedIn = undefined

let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);

/* 
    "Shivam" => true
    "" => false
    1/0 => true / false
    null => false
    undefined => false
*/

// let numInt = 33
// let numInt = null
// let numInt = undefined
let numInt = true
let numStr = String(numInt)

// console.log(numStr, typeof numStr);

// ********************* Operation ********************* //

let value = 3
let negValue = -value

// console.log(negValue);
/*
console.log(2+3);
console.log(2-3);
console.log(2*3);
console.log(2**3);
console.log(2/3);
console.log(2%3);
*/

let str1 = "Hello"
let str2 = " Shivam"
let str3 = str1 + str2;
// console.log(str3);
/*
console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");
*/
// console.log(3+4*5%2); // bad Practice code readability 0
// console.log(((3+4)*5)%2); 

/*
Bad Practice
console.log(+true);
console.log(+"");

let num1, num2, num3
num1 = num2 = num3 = 2 + 2
*/
let gameCounter = 100
// gameCounter++ // postfix 
++gameCounter // prefix
console.log(gameCounter);
console.log(gameCounter++);