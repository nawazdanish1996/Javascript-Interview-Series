
// Double - [10, 2, 6, 4, 12]
// Triple - [15, 3, 9, 6, 18]
// Binary - ["101, "1", "11", "10", "110"]

// Map()
// Return a new array with the square root of all element values.
// const arr = [5, 1, 3, 2, 6];

// function double(x){
//     return x * 2;
// }
// const output = arr.map(double);
// console.log(output);

// function triple(x){
//     return x * 3;
// }
// const output = arr.map(triple);
// console.log(output);

// function binary(x){
//     return x.toString(2);
// }
// const output = arr.map(binary);
// console.log(output);

// const output = arr.map((x) => x*3);

// console.log(output);

// filter()
// filter() function is basically used to filter the function of array.

// const arr = [5, 1, 3, 2, 6];
// filter odd values inside the array.
// function isOdd(x){
//     return x % 2;
// }
// function isEven(x){
//     // return x % 2 === 0; // is Even value
//     // return x % 2; // is odd
//     return x > 4; // greater than four
// }

// const output = arr.filter((x) => x < 3);
// console.log(output);

// reduce()
/* The reduce() method does not execute the function for empty
array elements. The reduce() method does not change the original array. */

const arr = [5, 1, 3, 2, 6];

const b = arr.indexOf(2);
console.log(b);
