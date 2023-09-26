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
re = /hello\?/;   // escaping


// Character Set Using Brackets []
re = /h[eai]llo/;  // Must be one of them inside brackets
re = /[HA]ello/i;
re = /[^ha]ello/;  // Anything except those inside brackets
re = /^[ha]ello/;  // Must start with h or a
re = /[a-z]ello/; // range; start with lowercase letters
re = /[A-Z]ello/;  // range; start with uppercase letters
re = /[a-f]ello/;
re = /^[A-Z]/;     // First letter must be uppercase 
re = /^[a-z]/;     // First letter must be lowercase 
re = /[a-z]/
re = /[A-Za-z]/
re = /[A-Za-z]ello/
re = /[0-9]ello/
re = /^[0-9]ello/
re = /[^0-9]ello/   // Not digit
re = /^[0-9][0-9][0-9]ello/   // three digit


// Braces {}  =>  Quantifier
re = /hel{2}o/;    //here l must occur exactly 2 times
re = /hel{3}o/;    //here l must occur exactly 3 times
re = /hel{2,5}o/;    //Range ==> 2 to 5 times
re = /hel{2,}o/;    //At least 2 times


// Parentheses ()  => Grouping 
re = /^([0-9]{10})/;
re = /^([0-9]{5})/;      // same as =>   /^[0-9][0-9][0-9][0-9][0-9]/

// Bangladeshi Phone Number
re  = /^01([0-9]){9}$/;
re  = /^\+8801([0-9]){9}$/;

re = /^([0-9]x){3}/;
re = /^([0-9]x){4}/;


str = "hello";
str = "hallo";
str = "hilo";
str = "hllo";
str = "heallo";
str = "heaillo";

str = "hello";
str = "aello";

str = "aello";
str = "hello";
str = "ello";
str = "jello";
str = " ello";

str = "hello"; 
str = "aello"; 
str = "ello"; 
str = "jello";

str = "aello";
str = "fello";
str = "hello";

str = "Tanvir";
str = "tanvir";

str = "xello";

str = "Again Hello";
str = "Again 8ello";
str = "8ello Again";

str = "hello Again";

str = "123ello Again";

str = "hello Again";

str = "helllo Again";

str = "hello Again";
str = "helllllo Again";
str = "hellllllo Again";
str = "helo Again";

str = "hello Again";
str = "hellllllllllllllllllllllllllllllo Again";
str = "helo Again";
str = "heo Again";

str = "01945824828";
str = "019458248280";

str = "01945824828";
str = "+8801945824828";

str = "2x3x4x5x";
str = "2x3x4x5x6x";

console.log(re.exec(str));
regTest(re, str);
function regTest(re, str) {
  if (re.test(str)) {
    console.log(`${str} matches ${re.source}`);
  } else {
    console.log(`${str} doesn't match ${re.source}`);
  }
}
