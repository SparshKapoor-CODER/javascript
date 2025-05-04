let a = 10
const b = 20
var c = 30

console.log(a);
console.log(b);
console.log(c);




if(true){
    let a1 = 10
    const b2 = 20
    var c3 = 30
}




// console.log(a1);   // ERROR
// reason : let and const are block scoped, so a1 and b2 are not accessible outside the if statement, unlike var c3.





//console.log(b2);  //  ERROR
// reason : b2 is not accessible outside the if statement, as it is declared with let.



console.log(c3); //   No ERROR
// reason : c3 is declared with var, so it is accessible outside the if statement, as var is function scoped.









// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------