
// ❓ Highest scoring word 
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

// ❓ Who's the Killer?
/* ------------------------------- description ------------------------------ */
/*
Some people have been killed!
You have managed to narrow the suspects down to just a few. Luckily, you know every person who those suspects have seen on the day of the murders.

Task.
Given a dictionary with all the names of the suspects and everyone that they have seen on that day which may look like this:

{'James': ['Jacob', 'Bill', 'Lucas'],
 'Johnny': ['David', 'Kyle', 'Lucas'],
 'Peter': ['Lucy', 'Kyle']}
and also a list of the names of the dead people:

['Lucas', 'Bill']
return the name of the one killer, in our case 'James' because he is the only person that saw both 'Lucas' and 'Bill'
*/

//* Logic of this approach: Step through the keys and the people each suspect saw 
// keep track of the number of victims (names in DEAD) that each suspect (key) saw. 
// If the suspect saw the entirely of dead (== dead.length) - then by this logic, they must be the killer 

function killer(suspectInfo, dead) {
    // init var to track killer name (for return)
    let killer = ""; 

    // iterate through the keys of suspectInfo
    Object.keys(suspectInfo).forEach(function(key) {
        // count of how many victims the key (suspect) has seen
        let count = 0; 
        // step through the arrays of people the suspect at key saw 
        for (const victim in dead) {
        // if the suspect has seen the victim currently processed 
            if (suspectInfo[key].includes(dead[victim])) {
                count += 1; 
            }
        }
        // if the suspect has seen all of the victims, then they're the killer in this scenario
        if (count == dead.length) {
        killer = key; 
        }
    })
    return killer;
}