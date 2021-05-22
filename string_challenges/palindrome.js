//* ❓ Palindrome 

// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

//* Solo Attempt - brute force, gets the job done 
function palindrome(str) {
    // we just learned multiple ways to reverse a string, with reverse, a for of loop, and reduce 
    // to determine if a string is a palindrome we must check if it is the same forwards as backwards 
    const reversedStr = str.split("").reverse().join(""); 
    // should this be deep equality? or will that fail?
    // an example of a direct comparison 
    return reversedStr === str; 
}

