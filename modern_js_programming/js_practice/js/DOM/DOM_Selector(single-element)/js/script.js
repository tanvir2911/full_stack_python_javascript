// document.getElementById()

let val;

// Getting an Element
val = document.getElementById('document-title');
val = document.getElementById('document-title').id;
val = document.getElementById('document-title').className;

// Changing Style
document.getElementById('document-title').style.backgroundColor = '#333';
document.getElementById('document-title').style.color = '#fff';
document.getElementById('document-title').style.padding = '10px';
document.getElementById('document-title').style.display = 'none';
document.getElementById('document-title').style.display = 'block';

// Changing Content
document.getElementById('document-title').textContent = 'New Title';
document.getElementById('document-title').innerText = 'Again New Title';
document.getElementById('document-title').innerHTML = '<i>Again Again New Title</i>';

val = document.getElementById('document-title');
val.innerText = 'Ha Ha Ha'


// document.querySelector()
val = document.querySelector('#document-title'); // id
val = document.querySelector('.title-class'); // class 
val = document.querySelector('h3');

val = document.querySelector('ol');
val = document.querySelector('li');
val = document.querySelector('ul li');
val = document.querySelector('ol li');

val.style.background = 'red';
val.style.color = 'white';

val = document.querySelector('li:last-child');
val = document.querySelector('li:nth-child(2)');
document.querySelector('li:nth-child(3)').innerText= 'Hello';
document.querySelector('li:nth-child(even)').innerText= 'World';
document.querySelector('li:nth-child(odd)').innerText= 'Gojo';



console.log(val);