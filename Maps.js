let myNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

let NewNums = myNumbers.map( (num) => (num + 20));  // Automatically returns the value

console.log(NewNums);


NewNums = myNumbers.map((num) => num * 10).map((num) => (num + 20)).filter((num) => (num >= 50));   // Chaining

console.log(NewNums);



// Documentation =>     https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map