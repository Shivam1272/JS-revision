/*
function print() {
    console.log("S");
    console.log("H");
    console.log("I");
    console.log("V");
    console.log("A");
    console.log("M");
}
*/
// print()

function addTwoNumber(num1, num2){
    let res = num1 + num2
    // return res
    
    return num1 + num2
}

const result = addTwoNumber(3, 5)
// console.log(result);

function loginUserMessage(username = "user"){
    if(!username)
        console.log("Please Provide username");
    else
        return `${username} just logged in.`
}

// console.log(loginUserMessage("Shivam"))


function calculateCartPrice(...args){
    return args
}

// console.log(calculateCartPrice(100, 200, 300, 400, 500));

const user = {
    username : "Shivam",
    price: 999
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} & price ${anyObject.price}`);
}

handleObject(user)