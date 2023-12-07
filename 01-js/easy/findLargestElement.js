/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
  let a = -Infinity;
  numbers.forEach((n) => {
    if (n >= a) a = n;
  });
  if (a == -Infinity) return undefined;
  else return a;
}

// console.log(findLargestElement([3, 7, 2, 9, 1]));
module.exports = findLargestElement;
