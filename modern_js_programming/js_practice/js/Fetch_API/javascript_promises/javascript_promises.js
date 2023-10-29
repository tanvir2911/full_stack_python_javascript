// Promises
// .then()
// .catch()

let persons = [
    { firstName : "Md. Mozammel",lastName: "Hossain"},
    {firstName: "Md. Fazle", lastName: "Rabbi"}
];

function createPerson(person){
    const prom = new Promise(function(resolve, reject){
        persons.push(person);
        let err  = false;
        if(!err){
            resolve();
        }else{
            reject('Error!! Something Wrong!!');
        }
        // resolve();
    });
    return prom;
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

createPerson({firstName:"Nibir", lastName:"Saha"})
    .then(getPerson)
    .catch(function(err){
        console.log(err);
    });
