let today = new Date()
/*
console.log(today);
console.log(typeof today);
console.log(today.toString());
console.log(today.toDateString());
console.log(today.toISOString());
console.log(today.toJSON());
console.log(today.toLocaleDateString());
console.log(today.toLocaleString());
console.log(today.toLocaleTimeString());
*/

let myCreatedDate = new Date("2023-12-8");
// console.log(myCreatedDate.toDateString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

let newDate = new Date();
// console.log(newDate.getDay());

console.log(newDate.toLocaleString('default', {
    weekday:'long',
    timeZoneName: 'long'
}))
