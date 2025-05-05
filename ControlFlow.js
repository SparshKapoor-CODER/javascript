if(55<30){
    console.log("Correct");
}
else{
    console.log("Wrong");
}









if(false === []){
    console.log("Correct");
} 
else{
    console.log("Wrong");
    
}   //This condition will always return 'false' since JavaScript compares objects by reference, not value.













let balance = 500;

(balance > 500)? console.log("true") : console.log("false");












if(false == []){
    console.log("Correct");
}
else{
    console.log("Wrong");
}


if([]){
    console.log("Correct");
}
else{
    console.log("Wrong");
}





// Expression	                                         Type	                                Result	                                     Reason
// false == []	                                       loose ==	                                 true	                                  Both coerced to 0
// if ([])	                                         truthiness	                                 true	                           Non-empty object (array) is truthy


if(''){                               // falsy value
    console.log("Correct");
}
else{
    console.log("Wrong");
}









let val = 10 ?? 15

console.log(val);              //     10

let val1 = null ?? 22

console.log(val1);              //     22

let val2 = undefined ?? 25

console.log(val2);              //     25