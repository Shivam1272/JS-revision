const name = "Shivam"
let repoCount = 35

// console.log(name + repoCount);
// `` => string interpolation
// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Pokemon Go Game 2012')
/*
console.log(gameName[5]);
console.log(gameName.__proto__); // use browser to check different method

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.toLocaleUpperCase());
console.log(gameName.charAt(5));
console.log(gameName.indexOf('g'));
*/

const newName = gameName.substring(0, 4);
// console.log(newName);

const anotherName = gameName.slice(-8, 7) 
// console.log(anotherName);

const url = "https://shivam-patel.netlify.app/"
// console.log(url.replace('-','%20'));
// console.log(url.includes('-'));

console.log(gameName.split(' '));