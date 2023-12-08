const myArr = [1, 2, 3, 4, 5] // Note it can store any type of data for eg: [1,2,true, "an", [2, 4, 5]]
// console.log(myArr[0])
// console.log(myArr.length)

/*
myArr.push(6) //insert in end
myArr.push(7)
myArr.push(8)
myArr.pop()   // remove from end
*/

/*
myArr.unshift(9) // insert from begning
myArr.shift()    // remove from begning
*/


const newArr = myArr.join() // return string

/*
// IMP : SPLICE/ SLICE
console.log("A",myArr);

const n1 = myArr.slice(1, 3) // dosent change array
console.log(" ",n1);
console.log("B",myArr);

const n2 = myArr.splice(1, 3) // change the array
console.log(" ",n2);
console.log("C",myArr);
*/

// ------------------------- Array Operation ------------------------- //

const marvel_hero = ["Thor", "IronMan", "SpiderMan"]
const dc_hero = ["SuperMan", "BatMan", "Flash"]

// marvel_hero.push(dc_hero)
const all_hero = marvel_hero.concat(dc_hero) // only combine 2 array at a time
const all_new_hero = [...dc_hero, ...marvel_hero, ...all_hero] // (...) spread operator use any number of array
// console.log(all_new_hero);

const anotherArray = [1, 2, 3, 4, [5,6], 7, [8,9,[10, 11], 12], 13]
const modifiedAnotherArray = anotherArray.flat(Infinity)
// console.log(modifiedAnotherArray)

/*
console.log(Array.isArray("shivam")) // check if variable is Array
console.log(Array.from("shivam"))   // convert everthing into array if possible if not return an empty array
*/

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3, "Shivam"))

