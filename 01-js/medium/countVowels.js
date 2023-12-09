/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  // Your code here
  let ctr = 0;
  let string = str.toLowerCase().split("").sort();
  string.forEach((str) => {
    if (str == "a" || str == "e" || str == "i" || str == "o" || str == "u") {
      ctr++;
    }
  });
  // console.log(ctr);
  return ctr;
}
countVowels("returns the correct count for strings with punctuation marks");
module.exports = countVowels;
