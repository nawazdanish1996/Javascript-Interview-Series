// DOM Event Object Model
// addEventListener

// What is addEventListener()?
/* addEventListener() method, which is an inbuilt function
which can be used to specify a function which will be 
executed in case a particular event is triggered. */

// Why should use addEventListener()
/*
It allows to bind multiple handlers to an object for
the same event.
*/

/*
Syntax:
Object.addEventListener(event, handler, capturePhase);
*/

/*
Example:
btn.addEventListener("click", myFun, false);
*/

// document.getElementById('test').onclick = function(){alert("Form Submitted");};

// var btn = document.getElementById('test');
// btn.addEventListener('click', function(){
//     alert('Button Clicked');
// });

// click
function myFun1(){
    document.body.style.backgroundColor = 'green';
}
let a = document.getElementById('test');
a.addEventListener('click', myFun1);


// mouseover
function myFun2(){
    document.body.style.backgroundColor = 'red';
}
let b = document.getElementById('yellow');
b.addEventListener('mouseover', myFun2);

// mouseout
function myFun3(){
    document.body.style.backgroundColor = 'blue';
}
let c = document.getElementById('blue');
c.addEventListener('mouseout', myFun3);