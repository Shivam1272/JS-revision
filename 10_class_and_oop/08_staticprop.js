class User{
    constructor(username){
        this.username = username
    }

    static createId(){
        return 1234
    }
    
    logMe(){
        console.log(`Username is ${this.username}`);
    }

}

class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }

}

const shivam = new User('Shivam')
const teacher = new Teacher('Shivam', "github@git.com")
shivam
teacher