console.log("2" > 1); // true, string '2' gets converted to a number

console.log(null == 0); // false, null and undefined are only equal to themselves and each other (== can not convert null to 0)
console.log(null>0); // false, null gets converted to 0
console.log(null>=0); // true, null gets converted to 0

console.log(undefined == 0); // false, undefined gets converted to NaN
console.log(undefined > 0); // false, undefined gets converted to NaN
console.log(undefined < 0); // false, undefined gets converted to NaN
console.log(undefined <= 0); // false, undefined gets converted to NaN
console.log(undefined >= 0); // false, undefined gets converted to NaN

console.log("2" == 2); // true, string '2' gets converted to a number
console.log("2" === 2); // false, strict equality check, different types
console.log("2" != 2); // false, string '2' gets converted to a number
console.log("2" !== 2); // true, strict equality check, different types

// the code in lines 3 to 10 is OK to use, but it's better to avoid it as it can lead to confusion and a clean code is always better.
// the code in lines 12 to 15 is not recommended to use, as it can lead to confusion and bugs.
// also if you want to print some calculations like : 
// console.log(3*5/2+19)  // 20.5 
// it's better to use the following code :
// console.log((3 * 5) / 2 + 19); // 20.5
// to make it more readable and easier to understand.
// and during job interviews of some companies, the compiler may not accept this type of code.
