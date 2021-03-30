//* ❓ Repeat a String Repeat a String 

/* ------------------------------- description ------------------------------ */
/*
Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number. For the purpose of this challenge, do not use the built-in .repeat() method.
*/

//* FIRST ROUND 🥊

function repeatStringNumTimes(str, num) {
    //* the string data type in JS is 🌈immutable🌈 - once created, they cannot be changed 
    // But we can create a new string based on the original string!
    let finalStr = ""; 

    // using a while loop! I forget about this guy sometimes! 
    while (num > 0) {
      finalStr += str; 
      num--; 
    }
    return finalStr; 
}