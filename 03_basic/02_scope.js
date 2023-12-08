let a = 200

if(0){
    let a = 10
    const b = 10
    var c = 10  // dont use var because it dosen't follow the scope rule
    console.log(a);
}

// console.log(a);
// console.log(b);
// console.log(c);

function one() {
    const username = "Shivam"
    
    function two() {
        const website = "YouTube"
        console.log(username);
    }
    // console.log(website);
    two()
}

// one()

if(1){
    let username = "Shivam"
    if(username === "Shivam"){
        const website = "YouTube"
        // console.log(`${username} learning on ${website}`);
    }
    // console.log(website);
} 
// console.log(username);


// ********************** Intresting ********************** //

console.log(addOne(5))
function addOne(num){
    return num++
}


const addTwo = function(num){
    return num+2
}

console.log(addTwo(5))

