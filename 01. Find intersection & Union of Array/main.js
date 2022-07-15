const arr1 = [1, 2, 3, 4, 5];
const arr2 = [3, 4, 5, 6, 7];

// First we need to find the Intersection
// output: 3, 4, 5
let interSectionArr = arr1.filter((curElem) => {
    return arr2.includes(curElem);
});

// console.log(interSectionArr);


// Second find the Union

// const unionArr = [...arr1, ...arr2];
const unionArr = [...new Set([...arr1, ...arr2])];
console.log(unionArr);
//output: 1, 2, 3, 4, 5, 3, 4, 5, 6, 7
//output: 1, 2, 3, 4, 5, 6, 7