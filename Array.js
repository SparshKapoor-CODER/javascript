// Documentation : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

const num = [1, 2, 3, 4, 5];
console.log(num);

let num1= [...num];
// uses the spread operator (...) to create a new array num1 that is a shallow copy of the existing array num.
// The spread operator is a convenient way to expand the elements of an array into a new array. In this case, ...num takes all the elements from the num array and spreads them into a new array. This means that num1 will contain all the elements that are present in num at the time of the assignment.
// The spread operator creates a shallow copy of the array, meaning that it only copies the references to the original elements. If the elements themselves are objects or arrays, changes made to those elements in one array will affect the other array as well.
// https://developer.mozilla.org/en-US/docs/Glossary/Shallow_copy


console.log(num1); // [1, 2, 3, 4, 5]


// array methods
// push()           -           adds one or more elements to the end of an array and returns the new length of the array.
// pop()            -           removes the last element from an array and returns that element.
// shift()          -           removes the first element from an array and returns that element.
// unshift()        -           adds one or more elements to the beginning of an array and returns the new length of the array.
// concat()         -           merges two or more arrays and returns a new array.
// slice()          -           returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included) where begin and end represent the index of items in that array. The original array will not be modified.
// splice()         -           changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
// indexOf()        -           returns the first index at which a given element can be found in the array, or -1 if it is not present.
// lastIndexOf()    -           returns the last index at which a given element can be found in the array, or -1 if it is not present.
// includes()       -           determines whether an array includes a certain value among its entries, returning true or false as appropriate.
// find()           -           returns the first element in the array that satisfies the provided testing function. Otherwise, it returns undefined.
// findIndex()      -           returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1.
// join()           -           creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string.


num.push(6);
console.log(num); // [1, 2, 3, 4, 5, 6]

num.pop();
console.log(num); // [1, 2, 3, 4, 5]

num.shift();
console.log(num); // [2, 3, 4, 5]

num.unshift(1);
console.log(num); // [1, 2, 3, 4, 5]

const num2 = [6, 7, 8, 9, 10];
const num3 = num.concat(num2);

console.log(num3); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const num4 = num.slice(1, 4);
console.log(num4); // [2, 3, 4]
console.log(num); // [1, 2, 3, 4, 5]
const num5 = num.splice(1, 2, 6, 7, 8);
console.log(num5); // [2, 3]
console.log(num); // [1, 6, 7, 8, 4, 5]

console.log(num.indexOf(4)); // 3
console.log(num.lastIndexOf(4)); // 4
console.log(num.includes(4)); // true
console.log(num.indexOf(15)); // -1


const n = num.join('-');
console.log(n); // 1-6-7-8-4-5   return type is string
