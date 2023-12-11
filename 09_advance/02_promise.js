const promiseOne = new Promise(function (resolve, rejected) {
    // Do Async Task
    // Task Like: DB Calls, Network Call etc

    setTimeout(function () {
      console.log('Async Task_1 completed');
      resolve();  
    }, 1000)
})

console.log(promiseOne);

promiseOne.then(function () {
    console.log('promiseOne resolve');
})

// promiseTwo

new Promise(function (res, rej) {
    setTimeout(function () {
        console.log('Async Task_2 completed');
        res();  
    }, 2000)
}).then(function () {
    console.log('promiseTwo resolve');
})


const promiseThree = new Promise(function(res, rej) {
    setTimeout(function () {
        console.log('Async Task_3 completed');
        res({
            username: "Shivam", 
            task :"Learning Js"
        });  
    }, 3000)
})

promiseThree.then(function (user) {
    console.log("promiseThree resolved",user);
})


const promiseFour = new Promise(function (res, rej) {
    setTimeout(() => {
        let error = true;
        if(!error){
            res({
                username: "Shivam", 
                task :"Learning Js"
            })
        }else{
            rej('Error Something went wrong in promiseFour')
        }
    }, 4000);  
})

promiseFour
.then((user)=>{
    console.log("promiseFour resolved", user);
    return user.username
})
.then((username)=>{
    console.log("promiseFour chaining",username);
})
.catch(function (e) {
    console.log("promiseFour rejected",e);
})
.finally(()=>{
    console.log("The Promise is either resolved or rejected");
})

const promiseFive = new Promise(function (res, rej) {
    setTimeout(() => {
        let error = true;
        if(!error){
            res({
                username: "Shivam", 
                task :"Learning Js"
            })
        }else{
            rej('Error Something went wrong in promiseFive')
        }
    }, 5000);
})

async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()

// async function getAllUser() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// }

// getAllUser()


fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error) =>{
    console.log(error);
})
.finally(()=>{
    
})