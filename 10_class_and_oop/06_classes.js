class User {
    constructor(username, email, password){
        this.username = username
        this.email = email
        this.password = password
    }

    encryptPassword(){
        return `${this.password}a1w4ed3jnrnngbjrf`
    }

    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const userOne = new User("user1", "user@github.com", "1qaz2wsx3edcrrfv5tgb6yhn7ujm8ik9ol0p")
console.log(userOne.encryptPassword());
console.log(userOne.changeUsername());