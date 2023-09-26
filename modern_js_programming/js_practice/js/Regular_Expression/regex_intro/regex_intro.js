// Regular Expression
// Pattern Matching Technique

let re;
let str;

re = /hello/;
re = /Hello/;
re = /hello/i;  // i = case insensitive

console.log(re);
console.log(re.source);

str = "HelLo World";
str = "Again Hello World";
str = "Hell World";
str = "fasdfasHellofsadfa World";
str = "Again Hello World Hello";

// exec() -> Returns result in an array or null
let result = re.exec(str);

str = "Hello World";
str = "World";

// test() => returns true or false
result = re.test(str);

str = "Hello World";

// match() => returns array or null
result = str.match(re);

str = "Again Hello World Hello";
str = "World";

// search() => returns index of the first match or -1
result = str.search(re);



// replace() => return new string
str = "Again Hello World Hello";
// str = "World";
let newStr = str.replace(re,'Hi');

console.log(result);
console.log(str);
console.log(re.source);
console.log(newStr);


// replaceAll() => works with global expression and returns new string
re = /hello/gi;
str = "Again Hello World Hello hello HElLo hellO";

newStr = str.replace(re,'Hi');

console.log(newStr);