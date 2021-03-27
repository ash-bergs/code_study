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
    words.reduce(function(longest, word) {
        // for each word in the words array we return the greater of the two numbers (the length of the last longest word (longest) and the current element's length)
        return Math.max(longest, word.length); 
    }, 0); 
}