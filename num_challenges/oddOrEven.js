//* ❓ Odd or Even 
/* ------------------------------- description ------------------------------ */
/* 
Given a list of integers, determine whether the sum of its elements is odd or even.

Give your answer as a string matching "odd" or "even".

If the input array is empty consider it as: [0] (array with a zero).

Examples:
Input: [0]
Output: "even"

Input: [0, 1, 4]
Output: "odd"

Input: [0, -1, -5]
Output: "even"
*/

//* FIRST ROUND SOLUTION

function oddOrEven(array) {
    // base case - arr is 0 if empty, and therefore even 
   if (array.length == 0) return "even"; 
   // use .reduce on array to sum all the numbers 
   const sum = array.reduce((a, b) => {
     return a + b;
   }, 0); 
   // check return of .reduce (the sum of all numbers) for evenness 
   if (sum % 2 == 0){
     return "even"; 
   } else return "odd"; 
}

/* ------------------------------- Reflection ------------------------------- */
//! I can definitely make this into an one-line, concise answer by using a ternary statement! 
// We can also cut down on space/time complexity by doing things in-place 

//* REFACTORED SOLUTION

function refactoredOddOrEven(arr) {
    return arr.reduce((a,b) => a + b, 0) % 2 ? "odd" : "even" 
}

// Stepping through return:
// 1 - arr.reduce((a,b) => a + b, 0) - reduce executes a provided callback fn on every el of the arr 
// callback function is summing the accumulator (a) (starts at 0) and the currentValue (current el of arr being processed)
// returns SINGLE value of all summed integers

// 2 - % 2 ? "odd" : "even"
// asks the question: is the value of the result of the reduce function divided by 2 truthy? i.e. does it have value?
// because 0 is considered falsey, and any other numerical value is considered truthy, the "odd" return will be the truthy clause of the ternary statement 
