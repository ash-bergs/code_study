//* ❓ Move Zeroes 

/* ------------------------------- description ------------------------------ */
/*
Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
*/

var moveZeros = function (arr) {
    // init "buckets" to sort array values into
    let zeroes = []; 
    let others = []; 
    
    // step through array in a for loop 
    for (let i=0; i<arr.length; i++) {
      // ternary: is the current element 0? if it is, add it to zeroes, otherwise add it to others
      arr[i] === 0 ? zeroes.push(arr[i]) : others.push(arr[i]); 
    }
    
    // ! we have a problem - some tests are failing. This algorithm needs to solve for FALSE and empty objects or arrays
    // * Silly me... all i had to do to solve my problem was do a deep comparison for 0 (both value AND type), voila, no more shifting of empty arrays or booleans
    
    
    // return the others array with the zeroes array glued to the end
    return others.concat(zeroes); 
}