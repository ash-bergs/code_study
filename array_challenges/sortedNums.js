//* ❓ Sort Numbers 

/* ------------------------------- description ------------------------------ */
/*
    Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.

    For example:

    solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
    solution(null); // should return []
*/

//* FIRST ROUND 🥊 
// fairly straight forward, using 🌈sort🌈 with a callback function to sort in ascending order 

function solution(nums){
    // before doing anything, check for null, or empty array 
    if (!nums) {
      return []; 
    }
    // pass the nums into a sort function, sorting elements in ascending order
    const sortedNums = nums.sort(function(a, b) {
      return a - b; 
    })
    
    return sortedNums;
  }

//* SECOND ROUND 🥊🥊 
// A more elegant return, utilizing a 🌈ternary statement🌈 

function ternarySolution(nums){
    // utilize ternary statement to conditionally return 
    // truthy clause: .sort takes in a callback (arrow) function, sorting in ascending order 
    // falsy clause: null or empty array, return empty array 
  return nums !== null ? nums.sort((a,b) => a-b) : [];
}