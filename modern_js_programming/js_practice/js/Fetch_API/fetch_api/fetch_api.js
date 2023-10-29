// Fetch API
// Fetch API uses Javascript Promise

document.getElementById('get_data').addEventListener('click', getData);

// xhr.open("GET", 'https://api.chucknorris.io/jokes/random',true);

function getData(){
    fetch('https://api.chucknorris.io/jokes/random')
    .then(res=>res.json())
    .then(data=>{console.log(data);})
    .then(err=>{console.log(err);})
}