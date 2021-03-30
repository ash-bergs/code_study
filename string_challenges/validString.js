//* ❓ Valid String

/* ------------------------------- description ------------------------------ */
/*
You are given a sequence of valid words and a string. Test if the string is made up by one or more words from the array.

Task
Test if the string can be entirely formed by concatenating words of the dictionary.

For example:

string[] dictionary = ["code", "wars"]; 

string s = "codewars"; // true -> match 'code', 'wars'

string s1 = "codewar"; // false -> match 'code', unmatched 'war'
*/

//* FIRST ROUND 🥊

var validWord = function(dictionary, word) {
    const copy = word
    
    // sort the dictionary so its in alphabetical order 
    dictionary.sort()
    
    // for each element in the dictionary 
    dictionary.forEach(element => {
      // perform a check to see if copy (the word) includes the element 
      // while it does, replace it with a space
      // while loop continues through the string until broken, by a non-included element
      if (copy.includes(element)) while (word.includes(element)) word = word.replace(element, '')
    })
    
    // return true or false, (depending on it all the elements in the word have been matched for and replaced)
    return word.length === 0
}