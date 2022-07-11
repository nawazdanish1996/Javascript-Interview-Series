let arr = [1, 1, 1, 2, 5, 5, 3, 9, 6, 7, 3, 3, 4, 9, 4];
console.log(arr);

let arr1 = [ ...new Set(arr)];
console.log(arr1);

/*
new set(arr) is a Set containing all the values in arr,
which duplicates necessarily removed. Then the spread
operator just convert this back into an array.
*/