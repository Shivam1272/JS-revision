// Singelton Object
// Object.create()

// Literals Object

const mySym = Symbol("key1")

const JsUser = {
    username: "Shivam",
    age: 21,
    [mySym] : "key1",
    location: "Mumbai",
    email:'shivam@github.com',
    isLoggedIn : false,
    lastLoginDay : ["Monday", "Tuesday"]
}

// Object.freeze(JsUser); 
// it dosent allow user to make any changes  

JsUser.age = 22

/*
console.log(JsUser.email);
console.log(JsUser['email']);
console.log(typeof JsUser[mySym]);
*/

// console.log(JsUser);

JsUser.greeting = function (){
    console.log(`Hello JS user ${this.username}`);
}

// console.log(JsUser.greeting());



//  ------------------------- -------------------------//

const tinderUser = new Object()
tinderUser.id = "121343abc"
tinderUser.name = "Sam"
tinderUser.isLoggedIn = true

// console.log(tinderUser);

const regularUser = {
    email:"sam@tinder.com",
    fullName: {
        userfullname:{
            firstname:"Sam",
            lastname:"choudhary"
        }
    }
}

// console.log(regularUser.fullName.userfullname);

const obj1 = {1 : "a", 2 : "b"}
const obj2 = {3 : "c", 4 : "d"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2) // {} optional parameter but it is a good practice
const obj3 = {...obj1, ...obj2} // best way 
// console.log(obj3);

// const user = [{}, {}, {}, {}]
/*
console.log(Object.keys(regularUser));
console.log(Object.values(regularUser));
console.log(Object.entries(regularUser));
console.log(regularUser.hasOwnProperty('fullName'));
*/

const course = {
    coursename: "Js In Hindi",
    price : 999,
    courseInstructor: "Hithesh"
}

const {courseInstructor: Instructor} = course // Destructuring nice practice
// console.log(Instructor);


