// JSON.stringify()  -->  JS object to JSON string
// JSON.parse()   -->  JSON string to JS Object 

var person1 = {                // here person1 will be treated as object not json
    "name": "Rahim",
    "age": 25,
    "homeTown": "Dhaka",
    "married" : false
};

var person2 = {
    name: "karim",
    age: 35,
    homeTown: "Chittagong",
    married: true
};

console.log(person2);
console.log(person1);



// var person_json = JSON.parse(person1);  // throws error as person1 isn't json and an object can't be parsed to another object 

var person_json = JSON.stringify(person1);
var person_obj = JSON.parse(person_json); // throws error as person_json isn't json and an object can'
console.log(person_json);
console.log(person_obj);