//* ❓ Falsy Bouncer 

/* ------------------------------- description ------------------------------ */
/*
Remove all falsy values from an array.

Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

Hint: Try converting each value to a Boolean.
*/

//* FIRST ROUND 🥊
// Doing this brute force on the first pass with a for loop solution 

function bouncer(arr) {
    const result = []; 

    for (let i=0; i<arr.length; i++) {
        if (arr[i]) {
            // the expression 'if (arr[i])' will return TRUE only for TRUTHY values, filtering out the falsy vals for us
            result.push(arr[i]); 
        }
    }

    return result; 
}

//* SECOND ROUND 🥊🥊
// It seems that an array method *probably* exists to perform a check like this over an array... 
// I know that it's not reduce, because that returns a single value 
// forEach *could work*, but it doesn't seem like an appropriate use of that tool. Plus forEach seems to carry complexities surrounding time and space complexity 
//? This could be a perfect scenario to use the 🌈filter🌈 method
/* -------------------------------------------------------------------------- */
/*                               About .filter()                              */
/*
    * Filter iterates over an array and returns a NEW ARRAY with only the elements that return TRUE in the callback function
    We'll pass the built-in Boolean function. 
    * In JavaScript, Boolean is used as a function to get the value of a variable, object, conditions, expressions, etc. in terms of true or false.
*/
/* -------------------------------------------------------------------------- */

function filteredBouncer(arr) {
    return arr.filter(Boolean); 
}