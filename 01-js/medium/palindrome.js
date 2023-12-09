/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
<<<<<<< HEAD
  // let string1 = str.toLowerCase().split("");
  // let string2 = [];
  // for (let i = string1.length - 1; i >= 0; i--) {
  //   string2.push(string1[i]);
  // }
  // console.log(string1, string2);
  // return JSON.stringify(string1) === JSON.stringify(string2);

  // Remove non-alphanumeric characters and convert to lowercase
  const cleanStr = str.replace(/[^A-Za-z0-9]/g, "").toLowerCase();

  // Compare the original string with its reverse
  return cleanStr === cleanStr.split("").reverse().join("");
}
isPalindrome("Pratham");
=======
  return true;
}

>>>>>>> assignments_up/master
module.exports = isPalindrome;
