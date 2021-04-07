//* ❓ Where Do I Belong?
/* ------------------------------- description ------------------------------ */
/*
    Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

    For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).

    Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).
*/

//* FIRST ROUND 🥊
// using the humble, basic, and way too often forgotten (by me) 🌈while loop🌈

function whereDoIBelong(arr, num) {
    // start by sorting the array in ascending order 
    const sortedArr = arr.sort(function(a, b) {
        return a - b; 
    }); 

    //! I always, always, always seem to forget about while loops, and that's a darn shame, because it magically solves for edge cases (like equality and potential emptiness of the original arr)
    i = 0; 
    while (num > sortedArr[i]) {
        i++;
    }
    // once we hit a greater number i stops incrementing and the while loop ends, giving us our index
    return i;
}

// test