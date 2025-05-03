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


const obj1 = {
    1: "a",
    2: "b"
};

const obj2 = {
    3: "c",
    4: "d"
};

const obj3 = { obj1, obj2};   // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }      object inside object

console.log(obj3);

// Now how to tackel this situation?

const obj4 = Object.assign({},obj1,obj2);  // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
console.log(obj4);

// Documentation   ====>   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign


//   We will not use the above mostly the thing we will use is the spread operator. The same that we used in array (...)

const obj5 = {...obj1 , ...obj2};
console.log(obj5);



// find more on browser console
