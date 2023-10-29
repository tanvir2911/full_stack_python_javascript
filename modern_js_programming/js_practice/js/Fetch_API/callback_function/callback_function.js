// Callback Function

// setTimeout(function(){
//     console.log("Hello World");
// }, 2000)

// let persons = [
//     { firstName : "Md. Mozammel",lastName: "Hossain"},
//     {firstName: "Md. Fazle", lastName: "Rabbi"}
// ];

// function createPerson(person){
//     setTimeout(function(){
//         persons.push(person);
//     },4000);
// }

// function getPerson(){
//     setTimeout(function(){
//         let output = '';
//         persons.forEach(function(person){
//             output+= `<li>${person.firstName} ${person.lastName}</li>`;
//         });
//         document.getElementById('output').innerHTML = output;
//     },2000)
// }

// createPerson({firstName:"Nibir", lastName:"Saha"});
// getPerson();







let persons = [
    { firstName : "Md. Mozammel",lastName: "Hossain"},
    {firstName: "Md. Fazle", lastName: "Rabbi"}
];

function createPerson(person, Callback){
    setTimeout(function(){
        persons.push(person);
        Callback();
    },4000);
}

function getPerson(){
    setTimeout(function(){
        let output = '';
        persons.forEach(function(person){
            output+= `<li>${person.firstName} ${person.lastName}</li>`;
        });
        document.getElementById('output').innerHTML = output;
    },2000)
}

createPerson({firstName:"Nibir", lastName:"Saha"}, getPerson);
