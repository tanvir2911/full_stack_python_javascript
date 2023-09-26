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



// Shorthand Character Classes   => must be used after \
re = /\w/;  // Word Character => alpha numeric or _
// re = /w/;
re = /\w+/;   // One or more word character
re = /\W/;   // Non Word Character
re = /\W+/;   //One or more  Non Word Character
re = /\d/;    // digit
re = /\d+/;    // One or more digit
re = /\D/;    // Non digit
re = /\D+/;    // One or more non digit
re = /\s/;   // match white space
re = /\S/;   // match non white space only no other characters should present
re  = /Hello\b/;  // word boundary at the end  only white spaces can be there
re  = /\bHello\b/;  // word boundary at both end only white spaces can be there


// Assertions
re = /x(?=yz)/;   // matches x only if x is immediately before yz or immediately followed by yz
re = /x(?!yz)/;  // matches x only if x is not immediately before yz or not immediately followed by yz


str = "(*&^";
str = "(*&^s";
str = "8";

str = "8";

str = "(*&^";
str = "(*&^s";
str = "(*&^sdsfadsfas";

str = "fjasldjflasdjflsd456456_"
str = "fjasldjflasdjflsd456456_+*-&"

str = "fjasldjflasdjflsd456456_"
str = "fjasldjflasdjflsd456456_+*-&"

str = "dfasdfasdfa5";
str = "dfasdfasdfa";

str = "dfasdfasdfa";
str ="146161641";

str ="146161641";
str ="14616 1641";
str =" ";

str = "Hello World";
str = "Hello4asdf World";
str = "fdsafasfHello World";


str = "fdsafasfHello World";
str = "fdsafasfHellodsfadsf World";
str = "Hello World";
str = " Hello World";

str = "ldfjalsdfjlasdjfxdfddfadfyzdfasd";
str = "ldfjalsdfjlasdjfxdfddfadfyzdfasd+++xyz+++fdasf";


str = "fdlfjasdlfjalsdx";
str = "yz";
str ="x";
str ="xyz";
str ="yzx";



console.log(re.exec(str));
regTest(re, str);
function regTest(re, str) {
  if (re.test(str)) {
    console.log(`${str} matches ${re.source}`);
  } else {
    console.log(`${str} doesn't match ${re.source}`);
  }
}
