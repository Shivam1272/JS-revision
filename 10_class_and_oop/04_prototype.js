let myName = "Shivam"
console.log(myName.length);


let heros = ["Thor", "IronMan", "SpiderMan"]
let heroPower = {
    thor:"Hammer",
    ironman:"suit",
    spiderman:"sling"
}

Object.prototype.shivam = function () {
    console.log(`${this} Say Hello`);
}

Array.prototype.heyShivam = function () {
    console.log(`${this} Say Hello`);
}

heroPower.shivam()
heros.shivam()

// heroPower.heyShivam()
heros.heyShivam()

const user = {
    name:"Shivam",
    email: 'shivam@github.com'
}

const Teacher = {
    makeVide: true
}

const TeachingSupport = {
    isAvalaible: false
}

const TASupport = {
    makeAssignment: 'Js Assignment',
    fullTime: true,
    __prot__: TeachingSupport
}

Teacher.__prot__ = user

// modern Syntax

Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUser = "                    Abc              "
String.prototype.trueLength = function () {
    console.log(`${this}`);
    console.log(`Number of Character in given String without "space": ${this.trim().length}`);
}

anotherUser.trueLength()
myName.trueLength()