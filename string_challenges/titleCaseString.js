//* ❓ Title Case a String 
/* ------------------------------- description ------------------------------ */
/*
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like the and of.
*/

//* FIRST ROUND 🥊 
// Using array method 🌈map🌈

function titleCase(str) {
    // cast string to all lowercase 
    const lowerCaseWords = str.toLowerCase().split(" "); 
    
    // split and map through the array capitalizing 1st chars
    const cappedWords = lowerCaseWords.map(function(word) {
        // capitalize the first character, and concatenate it to the rest of word 
        // word.slice(1) => the entire word, starting at the first index and ending at the last
      return (word.charAt(0).toUpperCase() + word.slice(1));
    })
    
    // join the array of capitalized words 
    return cappedWords.join(" ");
}

//* SECOND ROUND 🥊🥊
// I can make the above answer more succinct ... but arguably harder to read 👓👓

function editedTitleCase(str) {
    return str.toLowerCase().spit(' ').map(word => {
        return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(' '); 
}

//* THIRD ROUND 🥊🥊🥊
// Now with 🌈regular expressions🌈 and the string method 🌈replace🌈

/* -------------------------------------------------------------------------- */
/*                               About .replace                               */
/*
    The replace method returns a NEW STRING with some, or all, matches of a given pattern (parameter) replaced by a given replacement (second parameter). 
    * The pattern can be a string or a RegExp 
    ! If the pattern is a string only the FIRST occurence will be replaced
    * The replacement can be a string or a function (to be called for each match)

*/
/* -------------------------------------------------------------------------- */


function regExpTitleCase(str) {
    return str.toLowerCase().replace(/(^|\s)\S/g, letter => letter.toUpperCase());
    // About the RegExp (the PATTERN argument)
    // () -> creates the CAPTURE GROUP 
    // * ^|\s -> the first character (^) OR (|) first character after whitespace (\s)
    // \S -> matches any character the is no whitespace 
    // /g -> global tag, searches the whole string
    // * the REPLACEMENT argument is a function, converting the matching characters to capital letters
    // letter => letter.toUpperCase()
}

