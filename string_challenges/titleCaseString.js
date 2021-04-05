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