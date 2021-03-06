//* ❓ Descending Order
/* ------------------------------- description ------------------------------ */
/*
Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

Examples:
Input: 42145 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321
*/

//* FIRST ROUND SOLUTION 

function descendingOrder(n){
    // split the int into an array of numbers
    const numArray = String(n).split("")
    
    // use 'sort' function to sort numbers in ascending order 
    // use 'reverse' to reverse the array of numbers in place 
    // return array as a joined string 
    // all is cast into a Number type 
    return Number(numArray.sort().reverse().join(""))
}

/* -------------------------------------------------------------------------- */
/*                       📝 About the Sort Array Method                       */
/*
//* `.sort` is an Array.prototype method that sorts the elements of an array in-place 
The method works by converting elements to STRINGS, and then comparing their values according their UTF-16 values 
! Time and space complexity cannot be guaranteed, it depends on the implementation 

By default the sort method returns the array sorted in ascending order 1, 2, 3, etc. Which is why we used the `.reverse` method to reverse the array elements in-place. 

But we can override the sort callback function, and provide our own criterion: 
*/
/* -------------------------------------------------------------------------- */

//* REFACTORED SOLUTION

function refactoredDescendingOrder(n) {
    // Used a few different methods in this solution: parseInt() instead of Number()
    // .toString() rather than String()
    // the need for the .reverse method was removed by manually passing the callback function to .sort() returning in descending order (b - a)
    return parseInt(n.toString().split('').sort((a, b) => b - a ).join('')); 
}