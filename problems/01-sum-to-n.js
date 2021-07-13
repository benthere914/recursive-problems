/***********************************************************************
Write a recursive function called `sumToN` that takes in a number and returns
the sum of all the numbers from 0 to that number. Return null for any input
number below 0.

Examples:

sumToN(5) // returns 15
sumToN(1)  // returns 1
sumToN(9)  // returns 45
sumToN(-8)  // returns null
***********************************************************************/

const sumToN = num => {
  debugger;
  if (num < 0){
    return null;
  }

  if (num === 1) {
    debugger;
    return num;
  } else {
    debugger;
    return num + sumToN(num - 1)
                // ^^ nested number (all numbers within that number)
  }
};


console.log(sumToN(5)) // returns 15
sumToN(1); // returns 1
sumToN(2) // returns 1 + nestedNumber
console.log(sumToN(3)) // returns 3 + nestedNumber
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = sumToN;
} catch (e) {
  module.exports = null;
}
