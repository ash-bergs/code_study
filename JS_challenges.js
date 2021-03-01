/* -------------------------------------------------------------------------- */
/*                           Challenge: Who Likes It                          */
/* 
    You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

    Implement a function likes :: [String] -> String, which must take in input array, containing the names of people who like an item. It must return the display text as shown in the examples:

    likes [] -- must be "no one likes this"
    likes ["Peter"] -- must be "Peter likes this"
    likes ["Jacob", "Alex"] -- must be "Jacob and Alex like this"
    likes ["Max", "John", "Mark"] -- must be "Max, John and Mark like this"
    likes ["Alex", "Jacob", "Mark", "Max"] -- must be "Alex, Jacob and 2 others like this"
*/
/* -------------------------------------------------------------------------- */

// Original solution - truly brute force 

function likes(names) {
    // getting the length for brevity 
    people = names.length; 

    if (people === 0){
        return "no one likes this"; 
    } else if (people === 1) {
        return `${names[0]} likes this`; 
    } else if (people === 2) {
        return `${names[0]} and ${names[1]} likes this`;
    } else if (people === 3) {
        return `${names[0]}, ${names[1]} and ${names[2]} likes this`;
    } else {
        return `${names[0]}, ${names[1]} and ${people - 2} others likes this`;
    }

}

// using a switch statement - not really saving much time or space, but it is easier to read. 

function switchcaseLikes(names) {
    names = names || [];
    switch(names.length){
      case 0: return 'no one likes this'; break;
      case 1: return names[0] + ' likes this'; break;
      case 2: return names[0] + ' and ' + names[1] + ' like this'; break;
      case 3: return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this'; break;
      default: return names[0] + ', ' + names[1] + ' and ' + (names.length - 2) + ' others like this';
    }
  }
  

// Shifter letters! 

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

// Function expanded form number 

/* -------------------------------------------------------------------------- */
/*                                 description                                */
/* 
You will be given a number and you will need to return it as a string in Expanded Form. For example:

expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'
*/
/* -------------------------------------------------------------------------- */

function expandedForm(num) {
    // split numbers into string 
    let number = String(num); 
    // variable to hold the result 
    let result = []; 
    
    // step through number string 
    for (let i=0; i<number.length; i++){
      // if the number is 0 
      if (number[i] == 0) continue; 
      // if its not 0... 
      // push the number, and it's appropriate number of trailing 0's to indicate its mathematical place (10's, 100's, 1000's...)
      else result.push(number[i] + "0".repeat(number.length -i -1))
    }
    // The numbers are pushed onto an ARRAY of whole numbers. Concantenate with a space + sign and another space:
    return result.join(" + ")
  }

// Highest scoring word 

/* -------------------------------------------------------------------------- */
/*                                 description                                */
/* 
Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.
*/
/* -------------------------------------------------------------------------- */

function high(x){
    // split into an array - using space as a deliminator 
    let words = x.split(" ")
    // split the words into letters using .map and split (with no deliminator)
    // map returns a ... NEW ARRAY populated with the results of the provided function (.split)
    let splitChars = words.map(word => word.split('')); 
    // splitChars returns an array of arrays - each sub-array holds the characters of each letter in strings
    // we'll be stepping through BOTH below
    let charValues = splitChars.map(chars => {
    // in this first part of the map we're stepping through the first, second, etc sub-arrays as a chunk
    // i.e. [["F", "I", "R", "S", "T"], ["N", "E", "X", "T"], [], []] - grabbing "F""I""R""S""T" as a whole
    // init a counter to keep track of the each characters count 
        let counter = 0; 
        // in this INNER .MAP we step into the sub-array and iterate over the strings inside 
      chars.map(element => counter += element.toUpperCase().charCodeAt() - 64); 
      // grabbing the first element of the sub-array, ex "F", increase the counter according to the element's uppercase charCodeAt - 64 for alphabetical position 
      // finally return the counter 
      return counter
    }); 

    //* charValues now holds an array of word scores according to alphabetical position
    //* splitChars now holds an array of arrays - each sub-array holds the words split into letters (as strings) 
    
    // init a variable to keep track of the highest score 
    let largest = 0; 
    // init a variable to eventually hold the result of the highest scoring word's index 
    let largestPosition; 
    
    // stepping through that CHARVALUES - an array of word scores 
    for (let i=0; i< charValues.length; i++){
        // if the number is larger than largest (init at 0)
      if (charValues[i] > largest) {
          // assign that count to largest
        largest = charValues[i]; 
        // and grab the index of that word 
        largestIndex = i; 
      }
    }
    // after stepping through all the scores, the return will be the highest scoring word's score, and it's index in the ORIGINAL STRING 
    // now that we have the word's index, we can return the word at that index from the words array
    return words[largestIndex]; 
  }