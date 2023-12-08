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

console.log(numStr, typeof numStr);