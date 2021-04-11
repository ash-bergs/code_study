//* ❓ FrankenSplice 
/* ------------------------------- description ------------------------------ */
/*
    You are given two arrays and an index.

    Copy each element of the first array into the second array, in order.

    Begin inserting elements at index n of the second array.

    Return the resulting array. The input arrays should remain the same after the function runs.
*/

//* FIRST ROUND 🥊 
// Using two array methods 🌈array.prototype.slice🌈 and 🌈array.prototype.splice🌈

function frankenSplice(arr1, arr2, n) {
    // make a shallow copy of arr2, remember - do not mutate the original arrays 
    //* array.prototype.slice() returns a shallow copy of the original array 
    // .slice can optionally be passed a START and (not inclusive) END 
    const localArr = arr2.slice(); 

    // iterate through arr1
    for (let i=0; i<localArr.length; i++) {
        // for each element of arr1, insert it (arr[i]) (without deleting any other elements) at the nth index 
        localArr.splice(n, 0, arr1[i]); 
        // increment n so arr1 elements remain in order 
        n++; 
    }

    // once all elements of arr1 have been iterated over, the localArr will be updated 
    return localArr; 
}