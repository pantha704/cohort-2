/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/
<<<<<<< HEAD
// let result = 0;
// class Calculator {
//   Calculator(result) {
//     this.result = result;
//   }
//   add = (n) => (result += n);
//   subtract = (n) => (result -= n);
//   multiply = (n) => (result *= n);
//   divide = (n) => (result = result / n);
//   clear = () => (result = 0);
//   getResult = () => result;
//   calculate = (str) => {
//     try {
//       let result = str;

//       function areBracketsBalanced(input) {
//         const stack = [];
//         const openingBrackets = ["(", "[", "{"];
//         const closingBrackets = [")", "]", "}"];

//         for (let char of input) {
//           if (openingBrackets.includes(char)) {
//             // If the character is an opening bracket, push it onto the stack
//             stack.push(char);
//           } else if (closingBrackets.includes(char)) {
//             // If the character is a closing bracket, check if it matches the most recent opening bracket
//             const lastOpeningBracket = stack.pop();

//             // Check if the brackets match
//             if (
//               (char === ")" && lastOpeningBracket !== "(") ||
//               (char === "]" && lastOpeningBracket !== "[") ||
//               (char === "}" && lastOpeningBracket !== "{")
//             ) {
//               return Error; // Brackets are not balanced
//             }
//           }
//         }
//         return Error;
//       }

//       areBracketsBalanced(result);

//       //check string
//       if (result.includes("string")) return Error;

//       result = eval(result);

//       if (result == Infinity) {
//         return Error;
//       }
//       console.log(result);
//       return result;
//     } catch (error) {
//       console.log(error);
//       return error;
//     }
//   };
// }
// const cunst = new Calculator(0).calculate("2+sdsa");

class Calculator {
  constructor() {
    this.result = 0;
  }

  add(value) {
    return (this.result += value);
  }

  subtract(value) {
    this.result -= value;
  }

  multiply(value) {
    this.result *= value;
  }

  divide(value) {
    if (value === 0) {
      throw new Error("Cannot divide by zero");
    }
    this.result /= value;
  }

  clear() {
    this.result = 0;
  }

  getResult() {
    return this.result;
  }

  calculate(expression) {
    try {
      // Use the eval function to evaluate the expression
      this.result = eval(expression);
      if (this.result == Infinity) throw new Error();
    } catch (error) {
      // If an error occurs during evaluation, throw a custom error
      throw new Error("Invalid expression");
    }
  }
}

module.exports = Calculator;
