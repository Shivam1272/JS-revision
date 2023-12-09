// for

/*
    for (let i = 0; i <= 10; i++) {
        if(i == 5){
            console.log("5 is present in range");
        }
        console.log(i);
    }
*/

/*
    for (let i = 1; i <= 10; i++) {
        console.log(`Table of ${i}`);
        for (let j = 1; j <= 10; j++) {
            // console.log(`Inner loop ${j}`);
            console.log(`${i} * ${j} = ${i*j}`);
        }
    }
*/

/*
    const myHeros = ["Flash", "Thor", "BatMan", "IronMan"]

    for (let i = 0; i < myHeros.length; i++) {
        const element = myHeros[i];
        console.log(element);   
    }
*/

// Break & Continue

for (let i = 1; i <= 20 ; i++) {
    if(i === 5){
        // console.log("5 is deteced");
        break;
    }
    // console.log(i);
}

for (let i = 1; i <= 20 ; i++) {
    if(i === 5){
        // console.log("5 is deteced");
        continue;
    }
    // console.log(i);
}