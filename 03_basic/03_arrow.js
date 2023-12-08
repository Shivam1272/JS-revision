const user = {
    username:"Shivam",
    price : 999,
    welcome : function(){
        console.log(`${this.username}, welcome to the website`);
        console.log(this);
    }
}

/*
user.welcome()
user.username = "sam"
user.welcome()
*/

// console.log(this);
/*
 
function learn(){
    console.log(this);
}

learn()
*/

/* Arrow Function
const learn = () => {
    console.log(this);
}

learn()

*/

/*
const addTwo = (num1, num2) => {
    return num1 + num2
}
    
*/
// const addTwo = (num1, num2) => (num1 + num2)
const addTwo = (num1, num2) => ({username: "sh"})
console.log(addTwo(2, 3))


