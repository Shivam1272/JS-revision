class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }

}


const user = new Teacher("user", "user@gmail.com", "asdfghjkl")
const user1 = new User("User")

user.addCourse()
user1.logMe()
user.logMe()

console.log(user === user1);
console.log(user === Teacher);
console.log(user1 === Teacher);
console.log(user1 === User);

console.log(user1 instanceof Teacher);