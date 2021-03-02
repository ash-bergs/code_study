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