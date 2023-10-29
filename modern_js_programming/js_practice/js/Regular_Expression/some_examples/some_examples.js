// Examples
let re;
let str;

// Postal code 
// 4700, 4000

re = /^[0-9]{4}$/;

str = "4700";
str = "f400"


// Phone number
// 01945824828, +8801945824828, 8801945824828
re = /^01([0-9]{9})$/;
re = /^\+?(88)?01[0-9]{9}$/;

str = "01945824828";
str = "+8801945824828";
str = "8801945824828";

// email address
// bohubrihi8.learn@edu.com.bd
re = /^([a-zA-Z0-9]\.?)+[^\.]@([a-zA-Z0-9]\.?)+[^\.]$/;

str ="bohubrihi8.learn@edu.com.bd"

console.log(re.test(str));