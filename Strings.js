// Documetations at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String


const name = 'Sparsh';
const age = 18;

console.log(name + ' is ' + age + ' years old.'); // not recommended as we have more efficient way to do this

console.log(` ${name} is ${age} years old.`); // recommended way to do this is callee string interpolation

const friend = new String('John is a good boy');

console.log(friend[2]); // h
console.log(friend.charAt(2)); // h
console.log(friend.charCodeAt(2)); // 104   // ASCII value of h charCodeAt() method returns the Unicode of the character at a specified index in a string

console.log(friend.length); // 4
console.log(friend.toUpperCase()); // JOHN IS A GOOD BOY
console.log(friend.toLowerCase()); // john is a good boy
console.log(friend.indexOf('o')); // 1
 let str = '                       Hello World                             ';
    console.log(str.trim()); // Hello World

const str1 =  friend.substring(0, 4); // John
const str2 =  friend.slice(0, 4); // John
const str3 = friend.slice(-3); //  boy
console.log(str3);

console.log(friend.split(' '));// ['John', 'is', 'a', 'good', 'boy']
