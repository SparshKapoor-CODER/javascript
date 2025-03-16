let score=33;
console.log(typeof score);     // number

let score1= "33";
console.log(typeof score1);    // string

let Value = Number(score1);
console.log(typeof Value);     // number

let val = "33abc";
let value = Number(val);
console.log(value);             // NaN

let value2 = null;
console.log(Number(value2));      // 0

let value3 = undefined;
console.log(Number(value3));       // NaN

let value4 = true;
console.log(Number(value4));        // 1

let Myname = "Sachin";
console.log(Number(Myname));        // NaN

let isLogin = false;
let BOOLisLogin = 1;
console.log(isLogin);               // false
console.log(Boolean(BOOLisLogin));        // true

let str = "Hello";
console.log(Boolean(str));       // true

let str1 = "";
console.log(Boolean(str1));      // false

let Mynumber = 48;
console.log(Boolean(Mynumber));      // true

let StringNumber = (48).toString();  // we can also use String(48)

console.log(StringNumber);     // 48

console.log(typeof StringNumber);    // string

console.log(Mynumber == StringNumber);    // true  (== is used for value comparison)

console.log(Mynumber === StringNumber);   // false (=== is used for value and type comparison)

// ----------------------------Operations--------------------------------

let a = 10;
let nega = -a;
console.log(nega);      // -10

 str = "Hello";
str1 = " Sparsh";
console.log(str + str1);    // Hello Sparsh
console.log(1+"3");         // 13
console.log(1+3+"3");       // 43
console.log("1"+3+3);       // 133
console.log(3 + 4 * 5 % 3);   // 5 (4*5=20, 20%3=2, 3+2=5) not a good way to write code
console.log(+ false+1);        // 1
let count = 0;
console.log(count++);         // 0
console.log(count);           // 1  just like we do in java and c++
console.log(++count);         // 2



// Study from here : https://www.youtube.com/watch?v=9emXNzqCKyg&list=PLRAV69dS1uWSxUIk5o3vQY2-_VKsOpXLD&index=3
// https://www.youtube.com/playlist?list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37
// Documentation : https://tc39.es/ecma262/multipage/abstract-operations.html#sec-abstract-operations
