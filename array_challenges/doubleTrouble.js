//* ❓ Double Trouble 
/* ------------------------------- description ------------------------------ */
/* 
Given an array of integers (x), and a target (t), you must find out if any two consecutive numbers in the array sum to t. If so, remove the second number.

Example:

x = [1, 2, 3, 4, 5]
t = 3

1+2 = t, so remove 2. No other pairs = t, so rest of array remains:

[1, 3, 4, 5]

! Work through the array from left to right.

! Return the resulting array.
*/

function trouble(arr, target){
    // start a loop through arr 
    for (let i=0; i<arr.length; i++){ 
    // check consecutive elements
      // bracket notation allows us to use the result of the expression to grab the value of the next element
      if (arr[i] + arr[i + 1] === target) {
        // remove the second of the consecutive numbers 
        arr.splice(i + 1, 1);
        // decrement i, so we don't move the other elements 
        i--; 
      }
    }
    // arr is mutated as a result of the loop, we can return it
    return arr;
}
