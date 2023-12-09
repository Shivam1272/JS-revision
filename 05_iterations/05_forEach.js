// For Each dosen't return any value

const programming = ["Js", "rb", "py", "cpp", "java"]

/*
    programming.forEach(function(program) {
        console.log(program);
    })
*/

/*
function print(item) {
    console.log(item);
}

programming.forEach(print) // pass refernce 
*/

programming.forEach((program, index, arr) => {
    // console.log(program, index, arr);
})

const myCoding = [
    {
        languageName: "JacaScript",
        languageFileName: ".js",
        experince: 2
    },
    {
        languageName: "HTML",
        languageFileName: ".html",
        experince: 2
    },
    {
        languageName: "Cascading Style Sheet",
        languageFileName: ".css",
        experince: 2
    }
]

myCoding.forEach((item, idx) => {
    const {languageName, languageFileName, experince} = item
    console.log(languageName, experince, languageFileName);
})