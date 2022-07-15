/*
function init() {
    var firstName = "hitesh";

    function sayFirstName() {
        console.log(firstName);
    }
    return sayFirstName();
}

var value = init();*/
/*
function doAddition(x) {
    return function(y) {
        return x + y;
    }
}

var add5 = doAddition(4);
//add5(5);
console.log(add5(5));
console.log(doAddition(5)(5));*/

function countBy(initial) {
    // return the output using return keyword
    let initial = 4;
    // do not console.log it

}

var count = countBy(4);
console.log(count(2)) // prints 6 because 4 + 2
console.log(count(-4)) // prints 2 because 6 - 4
console.log(count(8)) // prints 10 because 2 + 8