var student = {
    name: "Tanvir",
    age: 28,
    homeTown: "Chandpur"
}

var student_json = JSON.stringify(student);

console.log(student);
console.log(student_json);

var student_new = JSON.parse(student_json);

console.log(student_new);