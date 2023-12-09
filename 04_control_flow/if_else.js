// if

const isUserLoggedIn = true

/*
    if (isUserLoggedIn) {
        console.log("User is Logged In set session Id");
    } else {
        console.log("Navigate to login page");
    }
*/

const balance = 1000
/*
    if(balance < 500){
        console.log("Less than 500");
    }else if(balance < 750){
        console.log("Less than 750");
    }else if(balance < 900){
        console.log("Less than 900");
    }else{
        console.log("Less than 1200");
    }
*/

const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(isUserLoggedIn && debitCard){
    // console.log("Allow to buy coures");
}

if(loggedInFromEmail || loggedInFromGoogle){
    // console.log("user just logged in");
}
