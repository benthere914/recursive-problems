/***********************************************************************
Write a recursive function called `sumArray` that takes an array of integers
and returns the value of all the integers added together. Your array may
include a mix of positive and negative integers!

Examples:

sumArray([1, 2, 3]); //  6
sumArray([0, 1, -3]); //  -2
sumArray([1, 2, 3, 4, 5]); // 15
***********************************************************************/

// your code here
const sumArray = arr => {
  if (arr.length === 0) {
    return 0
  }
  // BASE CASE
  if (arr.length === 1) { // if the arr only contains 1 item
    return arr[0]; // return that element
  } else {
    return arr[arr.length - 1] + sumArray(arr.splice(arr.length -1, 1)) // the last el + the sum of the array, with arr of the last idx removed

  }
}

console.log(sumArray([1, 2, 3]));
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = sumArray;
} catch (e) {
  module.exports = null;
}
