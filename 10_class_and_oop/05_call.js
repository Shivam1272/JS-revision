function setUserName(username) {
    // Performed complex DB Calls and validation
    console.log("called");
    this.username = username
}

function createUser(username, email, password){
    setUserName.call(this, username);
    this.email = email;
    this.password = password;
}

const userOne = new createUser("abc", "abc@github.com", "123456")
const userTwo = new createUser("xyz", "xyz@github.com", "654321")

console.log(userOne);
console.log(userTwo);