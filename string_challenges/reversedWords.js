//* ❓ Reversed Words 

/* ------------------------------- description ------------------------------ */
/*
Complete the solution so that it reverses all of the words within the string passed in.

Example:
reverseWords("The greatest victory is that which requires no battle")
should return "battle no requires which that is victory greatest The"
*/

//* FIRST ROUND SOLUTION

function reverseWords(str){
    // split the string into an array of the individual words
    // space is the deliminator 
    const splitStr = str.split(" "); 
    // create an array to push the words onto in reverse 
    let reversedWords = []; 
    
    // step through the array of words backwards, pushing the words into reversedWords 
    // i is init to the length of splitStr, as long as i is greater or equal to 0 the loop will continue, and instead of incrementing, we decrement each step
    for (let i = splitStr.length-1; i >= 0; i--){
      reversedWords.push(splitStr[i]); 
    }
    // finally, we must return a joined string of reversed words, concatenated with a space between elements 
    return reversedWords.join(" "); 
}

/* ------------------------------- Reflection ------------------------------- */
// ? This solution is brute force to the max. Creating two new variables, and for-loop make the code clunky and potentially hard to understand. Plus there is a more in-place way to do this. 

/* -------------------------------------------------------------------------- */
/*                        📝 The Reverse String Method                         */
/* 
In JS we can use the `.reverse()` method. The reverse method transposes the elements of the calling array object in place, mutating the array, and returning a reference to the array.

🧨 We can achieve everything we did above in just one line 💣
*/
/* -------------------------------------------------------------------------- */

//*  REFACTORED SOLUTION 

function refactoredReversedWords(str){
    // first `split` returns an array of str's individual words (those separated by a space)
    // second `reverse` reverses the order of the array's elements in-place 
    // finally, `join` joins the reversed elements with a space between them 
    return str.split(" ").reverse().join(" "); 
}