// Immediately Invoked Function Expressions (IIFE)
// Used to protect our data from the pollution of global scope


(function connection(){
    console.log("SQL Connected");
    
})();


(() => {
    console.log("Hello World");
    
})();
