// for of

const arr = [1, 2, 3, 4, 5, 6]

for (const num of arr) {
    // console.log(num);
}

const greetings =  "Hello world!!!"

for (const greet of greetings) {
    if(greet === ' ') continue;
    // console.log(`Each Char ${greet}`);
}

const map = new Map()

map.set("IN", "India")
map.set("FR", "France")
map.set("JAP", "Japan")
map.set("JAP", "Japan")

// console.log(map);
/*
    for (const [key, value] of map) {
        console.log(key, ':-', value);
    }

    for (const key in map) {
        // using for in you cannot iterate map object
        console.log(key); 
    }
*/

/*
    const games = {
        'game1': "NFS",
        'game2': "GTA-VI"
    }

    for (const game of games) { 
        //using for of you cannot iterate over object 
        console.log(game);
    }
*/


const programming = ["Js", "rb", "py", "cpp", "java"]
for (const key in programming) {
    // console.log(key); // print index
}