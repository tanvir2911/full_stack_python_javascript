// Multiselector

// document.getElementsByClassName()
let list = document.getElementsByClassName('sample-class');
list[0].style.background = 'red';
list[0].style.color = 'white';
list[0].style.padding = '10px';
list[0].textContent = 'Hello World';
// console.log(list[0]);

// document.getElementsByTagName()
list = document.getElementsByTagName('li');
list = document.querySelector('ol').getElementsByTagName('li');

let lis = Array.from(list);
lis.forEach((item)=>{
    // console.log(item);
});

// document.querySelectorAll()
// id => #
// classname => .
// tagname => nothing

list = document.querySelectorAll('ol li');
list.forEach((item)=>{
    // console.log(item);
})

let liOdd = document.querySelectorAll('li:nth-child(odd)');
let liEven = document.querySelectorAll('li:nth-child(even)');

liOdd.forEach((item)=>{
    item.style.background = 'grey'; 
    item.style.color = 'white'; 
})

liEven.forEach((item)=>{
    item.style.background = 'red'; 
    item.style.color = 'white'; 
})

console.log(list);
