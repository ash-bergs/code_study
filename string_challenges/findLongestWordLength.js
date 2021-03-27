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