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

console.log(user2);
