// Immediately Invoked Function Expression(IIFE)
/*
function connect() {
    console.log("DB Connected");
}

connect();
*/

// IIFE is used to reduce the pollution which are happening in Global Scope.

(function connect() {
    console.log('DB connected');
})();

((dbName) => (console.log(`DB connected to ${dbName}`)))('Github')
