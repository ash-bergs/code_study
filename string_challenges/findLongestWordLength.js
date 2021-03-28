//* ❓ Find Longest Word Length

/* ------------------------------- description ------------------------------ */
/*
Return the length of the longest word in the provided sentence.

Your response should be a number.
*/

//* FIRST ROUND 🥊

function findLongestWordLength(str) {
    // split the string into an array of words 
    const words = str.split(" "); 
    // iterate through the array, comparing the lengths of the words
    let longestWord = words[0]; 
    for (let i=0; i<words.length; i++) {
      if (words[i].length > longestWord.length) {
        longestWord = words[i]; 
      }
    }
    // return the highest length word's character count 
    return longestWord.length
  }
  
  findLongestWordLength("The quick brown fox jumped over the lazy dog");

//* SECOND ROUND 🥊🥊
// Since we're splitting the str into an array of words (strings themselves), we can use an array function! 
// Specifically .reduce 
function refactoredLongestWordLength(str) {
    const words = str.split(" "); 
    return words.reduce(function(longest, word) {
        // for each word in the words array we return the greater of the two numbers (the length of the last longest word (longest) and the current element's length)
        return Math.max(longest, word.length); 
    }, 0); 
}

//* THIRD ROUND 🥊🥊🥊 
// We could also use the Math.max() method and the .map array method 
function mapLongestWordLength(str) {
    // spread in (copy in) the str instead of mutating in-place or creating another variable in the function scope 
    return Math.max(...str.split(" ").map(word => word.length)); 
}

//* FOURTH ROUND 🥊🥊🥊🥊 
// Using recursion! 
// ? Recursion is still kind of a weird subject for me to wrap my head around 
function longestWorthLengthRecursive(str) {
    // split the str into an array as before 
    const words = str.split(" "); 

    // check if there is only one element in the array
    if (words.length == 1) {
        // if there is only one word, it is logically also the longest word 
        // return its length 
        return words[0].length; 
    }

    // if words has multiple words ... 
    // remove the first element of words and recursively call the function
    // slowly removing words one by one from the beginning and perpetually returning the max length
    return Math.max(
        words[0].length, 
        longestWorthLengthRecursive(words.slice(1).join(" "))); 
}