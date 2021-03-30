//* ❓ Truncate a String 

/* ------------------------------- description ------------------------------ */
/*
Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.
*/

//* FIRST ROUND 🥊 

function truncateString(str, num) {
    // start by checking string is longer than num, if not it will not be truncated
    if (str.length > num) {
      // slice method returns a new version of a string
      return str.slice(0, num) + "..."; 
    } else {
      return str; 
    }
}

//* SECOND ROUND 🥊🥊
// This solution isn't really any different than the one above - the logic is the same, only the style has changed
// Instead of an if loop, we'll use the 🌈ternary operator🌈

function ternaryTruncateString(str, num) {
    return str.length > num ? str.slice(0, num) + "..." : str; 
}
  