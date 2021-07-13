/***********************************************************************
Write a recursive function, `range`, that takes a start and an end and returns
an array of all numbers in that range, exclusive. If the end number is less than
the start, return an empty array.

Examples:

range(1, 5); // [1, 2, 3, 4]
range(3, 4); // [3]
range(7, 6); // []
***********************************************************************/


const range = (currentNumber, end, results = []) => {
  if (currentNumber >= end) return results;
  results.push(currentNumber)
  currentNumber++;
  return range(currentNumber, end, results)
}


// range = (start, num, arr = []) => {
//   debugger;
//   if (start > num) return arr;
//   arr.push(start)
//   debugger;
//   if (start + 1 < num) {
//     range(start + 1, num, arr)
//   }
//   return arr;
// }

console.log(range(1, 5)); // [1, 2, 3, 4]
console.log(range(3, 4)); // [3]
console.log(range(7, 6)); // []
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = range;
} catch (e) {
  module.exports = null;
}
