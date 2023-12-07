/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  const string1 = str1.toLowerCase().split("").sort();
  const string2 = str2.toLowerCase().split("").sort();

  return JSON.stringify(string1) === JSON.stringify(string2);
}
// console.log(isAnagram("sprat", "traps"));
module.exports = isAnagram;
