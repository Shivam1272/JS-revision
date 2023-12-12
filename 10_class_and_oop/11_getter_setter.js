class User{
    constructor(email, password){
        this.email = email
        this.password = password
    }

    get password(){
        return `${this._password}shivam`;
    }

    set password(password){
        this._password = password
    }

}

const userOne = new User("user@github.com", "asddd")
console.log(userOne.password)