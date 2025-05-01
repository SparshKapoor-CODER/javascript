// Singleton - made via constructor....
// Object.create.........................................Constructor makes this



// object literals                               Singleton not created
const myDOB = Symbol("dob");

const User = {
    name : "Sparsh",
    "Full name" : "Sparsh Kapoor",
    age : 19,
    email : "Sparsh@microsoft.com",
    isLoggedIn : false,
    [myDOB] : "March 4, 2006"    // symbol Reference
};

console.log(User.age);  // not much useful
console.log(User["age"]);  // better way
console.log(User["Full name"]);  //Sparsh Kapoor
//console.log(User.Full name)......  Error



console.log(User);

User.greetings = function(){
    console.log("Hello User");
}

console.log(User.greetings());  // Hello User







// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------




const VTOP = new Object();  // Singleton object

VTOP.RNo = "24BAI10986";
VTOP.Passcode = "VITonTOP123";
VTOP.name = "Sparsh Kapoor";
VTOP.Attendice = 96;


console.log(VTOP);
