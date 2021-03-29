//* ❓ Confirm Ending 
/* ------------------------------- description ------------------------------ */
/*
Check if a string (first argument, str) ends with the given target string (second argument, target).

This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.
*/

//* FIRST ROUND 🥊
// This first solution is brute force. 
// My first thought was to grab the last element of `str` and compare it to target... but I quickly saw I was oversimplifying the problem 
// I could definitely clean this up

function confirmEnding(str, target) {
    // get the length of target 
    const targetLength = target.length; 
    // get a slice of str based on how long the target is
    const strSlice = str.substring(str.length - targetLength)
  
    // if the target and slice of str match, return true, else false
    //? what difference does using == over === have here? is looking for deep equality more "costly"? or should I be checking for deep comparison instead? 
    return strSlice == target ? true : false;
  }
  
confirmEnding("Bastian", "n");
// >>> true 

//* SECOND ROUND 🥊🥊
// This is the same answer as above, just more succinct, and without creating variables 
// direct return - declarative approach 

function oneLineConfirmEnding(str, target) {
    return str.substring(str.length - target.length) === target; 
}