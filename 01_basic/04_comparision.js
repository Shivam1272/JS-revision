/*
console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 == 1);
console.log(2 != 1);
*/

// console.log("2" > 3); JS allow comparision of different data type which lead to problem some time
// console.log("02" > 10);

/* Avoid this type of conversion
        console.log(null > 0);
        console.log(null == 0);
        console.log(null >= 0);

        console.log(undefined > 0);
        console.log(undefined == 0);
        console.log(undefined >= 0);
*/

/* "===" 
use this comparision as much as possible 
because it also check datatype along with the vale
*/
console.log('0' === 0);
console.log(null === 0);
console.log(undefined === 0);
console.log(false === 0);