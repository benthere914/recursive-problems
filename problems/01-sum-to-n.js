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
  if (num < 0){
    return null;
  }
  let sum = 0;
  for (let i = 0; i <= num; i++){
    let nums = i;
    sum += nums;
  }
  return sum;
};


console.log(sumToN(5)) // returns 15


/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = sumToN;
} catch (e) {
  module.exports = null;
}
