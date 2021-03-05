//* ❓ Shifter letters

/* -------------------------------------------------------------------------- */
/*                                 description                                */
/* 
You probably know that some characters written on a piece of paper, after turning this sheet 180 degrees, can be read, although somitimes in a different way. So, uppercase letters "H", "I", "N", "O", "S", "X", "Z" after rotation are not changed, the letter "M" becomes a "W", and Vice versa, the letter "W" becomes a "M".

We will call a word "shifter" if it consists only of these letters. After turning the sheet, this word can also be read, although in a different way. So, the word "WOW "turns into the word "MOM". On the other hand, the word "HOME" is not a shifter.

Find the number of unique shifter words in the input string (without duplicates). String contains only uppercase letters and digits.
*/
/* -------------------------------------------------------------------------- */

//* FIRST ROUND SOLUTION

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

//TODO Refactor this function - it's quite verbose as it stands 