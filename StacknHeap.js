// Stack memory is used while dealing with primitive data types and Heap memory is used while dealing with reference (Non Premetive) data types.


let myLinkdinName = "Sparsh";
let myLinkdinName2 = myLinkdinName;

console.log(myLinkdinName); // Sparsh

let user = {
    email : "Sparsh@google.com",
    password : "123456",
    accountNumber : 1234567890
}

let user2 = user; // this will copy the reference of user to user2   if any changes are made in user2 then it will also reflect in user
console.log(user2); 

user.email = "Sparsh@amazon.com";

console.log(user2); // the value of email will be changed to "Sparsh@amazon.com" in user2 as well as user as both are pointing to the same reference in the heap memory 

// To avoid this we can use the spread operator to create a shallow copy of the object
// let user2 = {...user}; // this will create a shallow copy of the object user and store it in user2
// let user2 = Object.assign({}, user); // this will also create a shallow copy of the object user and store it in user2
// let user2 = JSON.parse(JSON.stringify(user)); // this will create a deep copy of the object user and store it in user2

//---------------------- Long story short ----------------------
// Stack memory is used while dealing with primitive data types and Heap memory is used while dealing with reference (Non Premetive) data types.
// in stack memory the data is stored in a sequential manner and the data is stored in the form of a stack
// in heap memory the data is stored in a random manner and the data is stored in the form of a tree

// in stack if we try to make a copy of a variable then the value of the variable is copied to the new variable
// and any changes in old variable will not affect the new variable as it is a copy of the old variable

// in heap if we try to make a copy of a variable then the reference of the variable is copied to the new variable
// and any changes in old variable will affect the new variable as both are pointing to the same reference in the heap memory
