// ❓ Sum of Positive Nums 

/* ------------------------------- description ------------------------------ */
/* 
You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.
*/

function positiveSum(arr) {
    // init a count to hold the result of summing the positive nums
    let result = 0; 
    
    // step through arr
    for (let i=0; i<arr.length; i++){
      // if arr[i] is greater than zero (and therefore positive)...
      if (arr[i] > 0){
        // add its total to the number in result 
        result += arr[i]; 
      } else continue; 
    }
    return result;
}

// ? We can definitely do this BETTER. And by better I mean with better performance. 

/* ------------------------------- Reflection ------------------------------- */
/* 
We have *so* many array methods at our fingertips - I know that I can use '.filter' to remove the non-positive numbers, so I'll start there. 

Then I can use the `.reduce` function... but I need to review that first, because I forgot how it works. 
*/

/* -------------------------------------------------------------------------- */
/*                      📝 About the `.reduce()` method                       */
/* 
- Performs a *callback function* on each element of an array 
- Takes up to 4 args: 
    - accumulator 
    - currentValue
    - currentIndex
    - source Array

- If the optional initialValue is not passed, then the initial accumulator and index default to 1 - skipping the first element of the array 
- Returns a SINGLE VALUE, the value that results from performing the reducer function on each element of the array
*/
/* -------------------------------------------------------------------------- */

function refactoredPositiveSum(arr){
    //* first, using a .filter function, we'll remove the negative nums
    // in the filter function x (current element being processed in the arr) is checked if it is positive (x > 0)
    // if it is, it'll be included in .filter return
    // .filter performs a test on each element of the arr - if the test is passed the el is included in the return arr 
    const filteredNums = arr.filter(x => x >= 0); 
    // filteredNums now holds all the positive numbers from the original array 
    // original array not mutated 

    //* second, the filteredNums will be reduced to a SINGLE VALUE by performing a callback function on each element 
    // the function will be adding it to the accumulator of the .reduce function 
    const reducedNums = filteredNums.reduce((a,b) => {
        // a is the ACCUMULATOR - starting at 0 (initialValue)
        // b is the currentValue (first el in arr)
        return a + b;
        // 0 is the INITIAL VALUE parameter 
        // if the initialValue is not given, it defaults to 1, setting the accumulator and starting index to 1 - first element of the arr will be skipped. 
    }, 0); 
    //* third, return the result of reduction (the final accumulator value)
    return reducedNums; 
}

//! 💣 By using method chaining, we can one-line, in-place pull this off! 🧨
// chain the .filter and .reduce and return directly to do in-place (declare no external variables to hold results)

function oneLinePositiveSum(arr) {
    // using an arrow function in the reduce method (and the .filter), we drop the `return` keyword in the function block (as well at the {} block bracers)
    return arr.filter(x => x >= 0).reduce((a,b) => a + b, 0); 
}

// ❓ Odd or Even 

/* ------------------------------- description ------------------------------ */
/* 

*/

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

function refactoredOddOrEven(arr) {
    return arr.reduce((a,b) => a + b, 0) % 2 ? "odd" : "even" 
}

// Stepping through return:
// 1 - .reduce - reduce executes a provided callback fn on every el of the arr 
// callback function is summing the accumulator (a) (starts at 0) and the currentValue (current el of arr being processed)
// returns SINGLE value of all summed integers

// 2 - % 2 ? "odd" : "even"
// asks the question: is the value of the result of the reduce function divided by 2 truthy? i.e. does it have value?
// because 0 is considered falsey, and any other numerical value is considered truthy, the "odd" return will be the truthy clause of the ternary statement 
 