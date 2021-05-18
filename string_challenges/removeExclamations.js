//* ❓ Remove Exclamations

/* ------------------------------- directions ------------------------------- */
/*
    Write function RemoveExclamationMarks which removes all exclamation marks from a given string.
*/

//* FIRST ROUND 🥊
// using 🌈array.prototype.filter🌈

function removeExclamationMarks(s) {
    // split the string 
    let chars = s.split(""); 
    // filter and return only chars that aren't !
    let filteredChars = chars.filter(i => {
      return i != "!"; 
    }); 
    
    // join the filteredChars
    return filteredChars.join(""); 
}