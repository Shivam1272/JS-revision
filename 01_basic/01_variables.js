const accountId = 14231342
let accountEmail = 'jsrevision@revision.com'
var accountPassword = '1324rwdsdasdf'
accountCity = "Mumbai" // bad practice
let accountState

// accountId = 1234231 // variable declare using const keyword cannot be overide;
// console.log(accountId);

accountEmail = "abc@gmail.com"
accountPassword = "133312423132"
accountCity = "Thane"

/*
    Prefer no to use var to declare any variable
    because of issue in block scope & functional scope 
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])