/*
setInterval(functionName, millisecond);
1000ms = 1 second
3000ms = 3 seconds
5000ms = 5 seconds*/

// using setInterval
// var a = 0;

// setInterval(Anim, 2000);

// function Anim() {
//     a = a + 10;

//     var target = document.getElementById("test");
//     target.style.marginLeft = a + 'px';
// };

// using setInterval & clearInterval
var a = 0;
var id = setInterval(Anim, 100);

function Anim() {
    a = a + 10;
    if (a == 200) {
        clearInterval(id); // clearInterval to stop till 200px
    } else {
        var target = document.getElementById("test");
        target.style.marginLeft = a + 'px';
    };

};