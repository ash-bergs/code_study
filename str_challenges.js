/* -------------------------------------------------------------------------- */
/*                        Welcome to String Challenges 🧵                    */
/* 
This file contains the string-based code challenges I've solved. Pseudo-code is provided for most problems, and I often come back to refactor the code. 
*/ 
/* -------------------------------------------------------------------------- */

// ❓ Reversed Words 

/* ------------------------------- description ------------------------------ */
/*
Complete the solution so that it reverses all of the words within the string passed in.

Example:
reverseWords("The greatest victory is that which requires no battle")
should return "battle no requires which that is victory greatest The"
*/

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

// ❔ REFACTORED SOLUTION 

function refactoredReversedWords(str){
    // first `split` returns an array of str's individual words (those separated by a space)
    // second `reverse` reverses the order of the array's elements in-place 
    // finally, `join` joins the reversed elements with a space between them 
    return str.split(" ").reverse().join(" "); 
}

// ❓ Reversed String 

/* ------------------------------- description ------------------------------ */
/* 
Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
*/

//! Using what I learned above about the `.reverse()` method, I used the same approach to reversing a string 

function solution(str){
    // split the str into individual letters (characters) - .split('')
    // reverse the split letters in-place - .reverse()
    // join the reversed characters and return as one string - .join('')
    return str.split('').reverse().join(''); 
}

// ❓ Shifter letters

/* -------------------------------------------------------------------------- */
/*                                 description                                */
/* 
You probably know that some characters written on a piece of paper, after turning this sheet 180 degrees, can be read, although somitimes in a different way. So, uppercase letters "H", "I", "N", "O", "S", "X", "Z" after rotation are not changed, the letter "M" becomes a "W", and Vice versa, the letter "W" becomes a "M".

We will call a word "shifter" if it consists only of these letters. After turning the sheet, this word can also be read, although in a different way. So, the word "WOW "turns into the word "MOM". On the other hand, the word "HOME" is not a shifter.

Find the number of unique shifter words in the input string (without duplicates). String contains only uppercase letters and digits.
*/
/* -------------------------------------------------------------------------- */

function shifter(s){
    // base case: if string is empty 
    if (s.length === 0) return 0; 
    // Create a collection of "shifter" letters 
    let shifterLetters = "HINOSXZWM";
    // split the string into its words so each word can be checked 
    let words = s.split(' ');
    // init variables to hold shifted words and a count 
    let uniqueWords = []; 
    let count = 0; 
    
    // removing duplicates 
    // if uniqueWords does not contain word, add it to uniqueWords, otherwise false (continue)
    for (word of words){
      !uniqueWords.includes(word) ? uniqueWords.push(word) : false; 
    }
    
    // in a loop, checking each word of uniqueWords for shifter words 
    for (word of uniqueWords){
      // init a checker variable to true 
      let isShifter = true;
      // nested loop checking each letter of the unique word 
      for (letter in word){
        // if the letter is not included in the shifterLetters
        if (! shifterLetters.includes(word[letter])){
          // then set the checker variable to false and break the loop (continue to next letter)
          isShifter = false; 
          break
        }
      }
      // if the word IS a shifter word, increment the count 
      isShifter ? count+= 1 : 0; 
    }
    return count; 
}

// Expanded Form Number 

/* ------------------------------- description ------------------------------ */
/* 
You will be given a number and you will need to return it as a string in Expanded Form. For example:

expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'
NOTE: All numbers will be whole numbers greater than 0.
*/

function expandedForm(num) {
    // we are given an integer - but must return a string
    // first, cast the num (integer) into a string 
    const strNum = String(num); 
    
    // init variable to hold result of each expanded num 
    let result = []; 
    
    // iterate over strNum 
    for (let i=0; i<strNum.length; i++){
      // strNum[i] is 0, then we continue (it only denotes place value)
      if (strNum[i] == 0) continue; 
      // else, add the number and its appropriate trailing 0's (denoting its place value)
      // -i takes away a zero for the number's place 
      // -1 takes away a zero so that the LAST number is not given a 10's value
      else result.push(strNum[i] + "0".repeat(strNum.length -i -1)); 
    }
    // return the result array as a joined string, concatenated by " + " deliminator 
    return result.join(" + "); 
}

/* -------------------------------------------------------------------------- */
/*                          About the `repeat` method                         */
/* 
The `repeat()` method constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together.
I provided the range paramater by using strNum.lenth - i - 1 - the result of that expression is the COUNT paramter - it adjusts for the proper number of zeroes. 
*/
/* -------------------------------------------------------------------------- */

// ❓ "Stringy"
/* ------------------------------- description ------------------------------ */
/* 
write me a function stringy that takes a size and returns a string of alternating '1s' and '0s'.

the string should start with a 1.

a string with size 6 should return :'101010'.

with size 4 should return : '1010'.

with size 12 should return : '101010101010'.

The size will always be positive and will only use whole numbers.
*/

function stringy(size) {
  // init var to push results onto
  const result = []; 
  
  // step through the array - starting at 1 to solve for the first character
  for (let i=1; i<=size; i++) {
    // if i is an even number (the modulo of i by 2 has a remainder of 0)
    if (i % 2 === 0){
      // add a 0 to the end of result
      result.push(0); 
    } else {
      // else i is an odd number, add 1 to the end of result array
      result.push(1)
    }
  }
  // return the result array as a joined string (no spaces between elements)
  return result.join(''); 
}

/* ------------------------------- Reflection ------------------------------- */
// ? This solution works, but what does it look like from a space and time standpoint? 
// ? But what IS the space time complexity?? 
//* We're creating a variable, an array, entering a for and nested if loop and adding to the array, and then mutating the array with .join

function stringy(size) {
  return ('1'.repeat(size)).replace(/11/g, '10');
}

// In this function I think the time complexity is 0(n), linear time - we create the string, and then use a regEx to replace consecutive 1's
// searching a substring inside a string can be done in linear time using KMP algorithm which is the most efficient. Replacing in the worst case will take linear time as well.
// the time depends on the length of the string - number of `size`

/* -------------------------------------------------------------------------- */
/*                             📝 Note on .replace                            */
/*
Basic syntax: string.replace(searchValue, newValue)
Replace is a string method that searches a string for a certain value (or regEx) and returns a NEW STRING with searched for values replaced with the given newValue
* .replace(/11/g, '10') - the first argument we give a regular expression, it searches for consecutive 1's globally (across the entire string)
* second we replace those consecutive 1's with '10'
*/
/* -------------------------------------------------------------------------- */