//* ❓ Largest of Four 
/* ------------------------------- description ------------------------------ */
/*
Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].
*/

//* NOT QUITE.... 🤔🤔

//! There's a problem here - this works like I expected... almost. But then negative numbers came along and rained on my parade. 
// If a subarray only contains negative integers, the 0 value will never be replaced... 
//? How do I solve for this? 

function notQuiteLargestOfFour(arr) {
    // variable to keep track of the highest sub-arr elements 
    // hardcoding in initial values of 0? since we know the arr will always have 4 subarrays 
    const largestNums = [0, 0, 0, 0]; 
    // iterate through the array (of arrays)
    for (let i=0; i<arr.length; i++) {
      for (let j=0; j<arr[i].length; j++) {
        // loop through sub-arr, capture highest val element 
        // if the currently processed element is greater than the value at the ith position in longestWords
        if (arr[i][j] > largestNums[i]) {
          // reassign the value 
          largestNums[i] = arr[i][j]; 
        }
      }
    }
    return largestNums;
}

//* FIRST ROUND SOLUTION 🥊

function largestOfFour(arr) {
    // create a variable to keep track of largest sub-arr nums
    let largestNumbers = [];
    // begins the loop through the main array
    for (let i = 0; i < arr.length; i++) {
        // create a checker variable for comparison 
        // assign it to the first element of the sub-array as a default 
        //! this removes the negative problems I was having in the function above 👆
      let largestNumber = arr[i][0];
      // begin the loop through subarray at arr[i]
      for (let j = 1; j < arr[i].length; j++) {
          // check the value of the first element against all its sibling elements
        if (arr[i][j] > largestNumber) {
            // only keeping the largest 
          largestNumber = arr[i][j];
        }
      }
      // finally, capture the result of each iteration here (in the outer loop)
        largestNumbers[i] = largestNumber;
    }
    return results;
  }
