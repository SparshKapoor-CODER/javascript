const accountId =860576;
let accountEmail = "sparsh@google.com";
var accountPassword = "password";
accountCity = "Agra";

//accountId =122345; // Error: Uncaught TypeError: Assignment to constant variable.
console.log(accountId);

accountEmail = "kk@Microsoft.com"; // No error
accountCity = "San Francisco"; // No error
accountPassword = "hfkdljfda"; // No error
let accountState; // No error output: undefined

/* NOTE
preffer not to use var keyword, as it is function scoped and can be redeclared and updated.
*/ 

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
