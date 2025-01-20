// Documentation : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
//                 https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-time-values-and-time-range

// defined as the midnight at the beginning of January 1, 1970, UTC.
// Date objects are based on a time value that is the number of milliseconds since 1 January, 1970 UTC.
// Date objects are created with the new Date() constructor.
// There are four ways of instantiating a date:
// new Date()
// new Date(value)
// new Date(dateString)
// new Date(year, monthIndex [, day [, hours [, minutes [, seconds [, milliseconds]]]]])




let myDate = new Date();
console.log(myDate); // current date and time
console.log(myDate.toString()); // current date and time
console.log(myDate.toDateString()); // current date
console.log(myDate.toTimeString()); // current time
console.log(myDate.toUTCString()); // current date and time in UTC
console.log(myDate.toISOString()); // current date and time in ISO format
console.log(myDate.toLocaleString()); // current date and time in local format
console.log(myDate.toLocaleDateString()); // current date in local format
console.log(myDate.toLocaleTimeString()); // current time in local format

console.log(typeof(myDate)); // object
console.log(typeof(getDate)) // undefined


let MyBirthDay = new Date(2006, 2, 4);
console.log(MyBirthDay.toDateString()); // Sat Mar 04 2006   (month is 0 based)

let MyBirthDay2 = new Date("2006-03-04");
console.log(MyBirthDay2.toDateString()); // Sat Mar 04 2006


console.log(Date.now()); // returns the number of milliseconds elapsed since January 1, 1970 00:00:00 UTC
console.log(typeof(Date.now())) // number
console.log(Math.floor(Date.now() / 1000)); // returns the number of seconds elapsed since January 1, 1970 00:00:00 UTC

console.log(MyBirthDay.getTime()); // returns the number of milliseconds since January 1, 1970 00:00:00 UTC




// Date Methods
// getFullYear()    	  Returns the year of the specified date according to local time.
// getMonth()	          Returns the month of the specified date according to local time.
// getDate()	          Returns the day of the month for the specified date according to local time.
// getDay()	            Returns the day of the week for the specified date according to local time.
// getHours()	          Returns the hour of the day for the specified date according to local time.
// getMinutes()	        Returns the minutes of the specified date according to local time.
// getSeconds()       	Returns the seconds of the specified date according to local time.
// getMilliseconds()  	Returns the milliseconds of the specified date according to local time.
// getTime()          	Returns the numeric value of the specified date as the number of milliseconds since January 1, 1970, 00:00:00 UTC.




console.log(MyBirthDay.getFullYear()); // 2006
console.log(MyBirthDay.getMonth()); // 2
console.log(MyBirthDay.getDate()); // 4
console.log(MyBirthDay.getDay()); // 6
console.log(MyBirthDay.getHours()); // 0
console.log(MyBirthDay.getMinutes()); // 0
console.log(MyBirthDay.getSeconds()); // 0
console.log(MyBirthDay.getMilliseconds()); // 0
console.log(MyBirthDay.getTime()); // 1141420800000




// Fun with toLocaleString


console.log(MyBirthDay.toLocaleString('en-US' , {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
})); // weekday: 'long',year: 'numeric',month: 'long',day: 'numeric'

// Output: Saturday, March 4, 2006
 
console.log(MyBirthDay.toLocaleString('en-US' , {
    weekday: 'short',
    year: '2-digit',
    month: '2-digit',
    day: '2-digit'
}));  // weekday: 'short',year: '2-digit',month: '2-digit',day: '2-digit'

// Output: Sat, 03/04/06
 
console.log(MyBirthDay.toLocaleString('en-US' , {
    weekday: 'narrow',
    year: '2-digit',
    month: 'narrow',
    day: '2-digit'
})); // weekday: 'narrow',year: '2-digit',month: 'narrow',day: '2-digit'

// Output: S, 06-03-04
 
console.log(MyBirthDay.toLocaleString('en-US' , {
    weekday: 'narrow',
    year: '2-digit',
    month: 'numeric',
    day: '2-digit'
})); // weekday: 'narrow',year: '2-digit',month: 'numeric',day: '2-digit'

// Output: S, 06-3-04
 
console.log(MyBirthDay.toLocaleString('en-US' , {
    weekday: 'short',
    year: '2-digit',
    month: 'short',
    day: '2-digit',
})); // weekday: 'short',year: '2-digit',month: 'short',day: '2-digit'

// Output: Sat, 03/04/06
