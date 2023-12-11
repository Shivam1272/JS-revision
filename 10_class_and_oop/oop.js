const user = {
    username: "Shivam",
    loginCount : 8,
    signedIn: true,

    getUserDetail: function () {
        console.log('Got User details from DB');
    }
}

// console.log(user.username);
// console.log(user.getUserDetail());

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    
    return this
}

/*
    without new keyword
    const userOne = User('Shivam', 12, true)
    const userTwo = User('Shikhha', 11, false)
    console.log(userOne);
*/

/*
    when using new keyword
    1. It will create empty object also refered as a instance
    2. Constructor function is called when we used new keyword
    3. It wrap all the variable, method in that
*/

const userOne = new User('Shivam', 12, true)
const userTwo = new User('Shikhha', 11, false)
console.log(userOne.constructor);