const userEmail = "shivam@github.com"

if (userEmail) {
    // console.log("Got user Email");
} else {
    // console.log("Don't have user Email");
}

/*
    Falsy Value:
        false, 0, -0, BigInt(0n), "", null, undefined, Nan
    
    Truthy Value:
        "0", 'false', " ", [], {}, function(){},
*/

const emptyArr = []

if(emptyArr.length === 0){
    // console.log("Array is Empty");
}

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    // console.log("Object is empty");
}

// Nullish Coalescing Operator(??): null undefined

let val;
val = 5 ?? 10
val = null ?? 10
val = undefined ?? 15
val = null ?? 10 ?? 20


// console.log(val);

// Terniary Operator

let iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("Greater than 80") : 
                    console.log("Less than 80");