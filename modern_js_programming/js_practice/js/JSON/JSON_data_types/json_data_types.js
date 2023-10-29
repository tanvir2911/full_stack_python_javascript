//https://jsonlint.com/
// valid json data types
//string
// number
// object (JSON object)
// array
// boolean
// null

// JSON doesn't support undefined, date, function

var person = {
    name: "Rahim", // String
    age: 25, // Number
    homeTown: "Dhaka",
    married: false, // Boolean 
    dob: 1995-05-12, // Date
    test_null: null, // null 
    test_undefined: undefined, // undefined
    greet: function(){
        console.log(`Hello ${this.name}`);
    }
}

var person_json = JSON.stringify(person);

console.log(person);

console.log(person_json);