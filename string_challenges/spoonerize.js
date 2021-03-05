//* ❓ Spoonerize 

/* ------------------------------- description ------------------------------ */
/*
A spoonerism is a spoken phrase in which the first letters of two of the words are swapped around, often with amusing results.

In its most basic form a spoonerism is a two word phrase in which only the first letters of each word are swapped:

"not picking" --> "pot nicking"

Your task is to create a function that takes a string of two words, separated by a space: words and returns a spoonerism of those words in a string, as in the above example.

NOTE: All input strings will contain only two words. Spoonerisms can be more complex. For example, three-word phrases in which the first letters of the first and last words are swapped: "pack of lies" --> "lack of pies" or more than one letter from a word is swapped: "flat battery --> "bat flattery" You are NOT expected to account for these, or any other nuances involved in spoonerisms.

Once you have completed this kata, a slightly more challenging take on the idea can be found here: http://www.codewars.com/kata/56dbed3a13c2f61ae3000bcd

ALGORITHMSSTRINGS
*/

function spoonerize(words) {
    //...aaaaand SPOONERIZE!
  // split the string into an array of words 
  let singleWords = words.split(" "); 
  
  // grab the first and last element 
  // using .replace string method to replace the first letter of the first word with the first letter of the last word 
  let newFirstWord = singleWords[0].replace(singleWords[0][0], singleWords[singleWords.length - 1][0])
  // using .replace to replace the first letter of the LAST word with the first letter of the LAST word 
  let newLastWord = singleWords[singleWords.length - 1].replace(singleWords[singleWords.length -1][0], singleWords[0][0])
  
  // BTW THIS IS ALL DUMB
  // inject new values into singleWords 
  singleWords.splice(0, 1, newFirstWord); 
  singleWords.splice(singleWords.length - 1, 1, newLastWord)
  
  // return that array as a joined string 
  return singleWords.join(" "); 
}

/* -------------------------------------------------------------------------- */
/*                                 Reflection                                 */
/*
This solution is really brute force - it has 'beginner' written all over it
When originally solving for the problem I was assuming that there would be situations where the the string had more than 2 words
So when solving for the problem, I went through all these steps to preserve inner words 
! This is why reading all the directions in detail is important 🤦‍♀️
*/
/* -------------------------------------------------------------------------- */

//* REFACTORED SOLUTION 
// Because all input strings will ONLY contain 2 words, this function can be super simplified
//* And we can use destructuring! 

function refactoredSpoonerize(words) {
    // init the first and last variables, splitting the string 
    let [ first, last ] = words.split(" "); 
  
    // using destructuring 
    // the value of first is the result of concatenating last[0] (the first letter of last) + the first word minus the first letter (first.slice(1))
    // the same is done for the last letter - they are now mutated 
    [first, last] = [ last[0] + first.slice(1), first[0] + last.slice(1)]; 
    
    // return updated words as a joined string
    return [first, last].join(" "); 
}