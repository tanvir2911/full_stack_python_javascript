// Events of JavaScript
// https://www.w3schools.com/JS/js_events_examples.asp

// Event Listener

let message =(e)=>{
    let val = e;
    val = e.target;  // this
    val = e.target.id;

    val = e.timeStamp; //event is triggered ... milliseconds after page loaded
    val = e.type;

    val = e.clientX;
    val = e.clientY;

    val = e.offsetX;
    val = e.offsetY;


    console.log(val);
}
let message1 =(e)=>{
    let val = e;
    val = e.target; 
    val = e.target.id;

    val = e.timeStamp; //event is triggered ... milliseconds after page loaded
    val = e.type;

    val = e.clientX;
    val = e.clientY;

    val = e.offsetX;
    val = e.offsetY;

    val = this;

    e.target.style.backgroundColor = `#${e.offsetX}`

    console.log(val);
}
document.querySelector('.container').addEventListener('mousemove',message1);
document.querySelector('.container').style.backgroundColor ='red';
document.getElementById('sample-btn').addEventListener('click',message);
document.getElementById('sample-btn').style.color = 'white';


document.querySelector('#name').addEventListener('focus',test);
document.querySelector('#name').addEventListener('keyup',test2);

function test(e){
    this.style.background = 'pink'
}

function test2(e){
    console.log(this.value);
    document.getElementById('demo').innerText = this.value;
    e.target.value = e.target.value.toUpperCase();
}

console.log('hello');