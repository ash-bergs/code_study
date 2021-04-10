//* ❓ Chunk Monkey 

/* ------------------------------- description ------------------------------ */
/*
    Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
*/

//* FIRST ROUND 🥊 
// Brute force - using a 🌈for loop🌈 and the 🌈array.prototype.slice method🌈 

function chunkyMonkey(arr, size) {
    // init a variable to hold return
    const chunkedArray = []; 

    for (let i=0; i<arr.length; i+=size) {
        //! i increments by SIZE each loop 
        chunkedArray.push(arr.slice(i, i + size))
        // each loop, which is incremented by the size arg, we grab a slice of the array that's as long as size dictates 
        // because i is also incremented by the size, we won't miss any elements
    }

    return chunkedArray; 
}

