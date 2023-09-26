let re;
let str;

// Literal Characters
re = /hello/;
re = /hello/i;
re = /hell/i;
re = /lo w/i;
re = /low/i;

// Meta Characters
re = /^hello/; // Must start with
re = /^hello/i;
re = /hello$/i; // must end with
re = /world$/i;
re = /^hello$/i; // must start and end with
re = /^h.llo$/i; // matches any one character
re = /h.llo/;
re = /h*llo/; // 0 or more characters
re = /he?llo/; // the character before ? is optional
re = /he?a?llo/; // the character before ? is optional
re = /hello\?/   // escaping

str = "Hello World";
str = "hello World hello";
str = "hello";
str = "hallo";
str = "hillo";
str = "h llo";
str = "hllo";
str = "hillo World";
str = "hello World";
str = "hillo";
str = "hilo";

str = "hilo";
str = "hljasdlfjladjfllo";
str = "hljasdlfjladjfllllllllo";
str = "hljasdlfjladjflllllllloooooo";
str = "h163546llo";
str = "hllo";

str = "hello";
str = "hllo";
str = "hallo";

str = "hallo";
str = "hllo";
str = "heallo";
str = "hello";
str = "htllo";

str  = "hello?"
str  = "hello"

console.log(re.exec(str));
regTest(re, str);
function regTest(re, str) {
  if (re.test(str)) {
    console.log(`${str} matches ${re.source}`);
  } else {
    console.log(`${str} doesn't match ${re.source}`);
  }
}
