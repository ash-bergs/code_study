//* ❓ Mutation 
/* ------------------------------- description ------------------------------ */
/*
    Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

    For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

    The arguments ["hello", "hey"] should return false because the string hello does not contain a y.

    Lastly, ["Alien", "line"], should return true because all of the letters in line are present in Alien.
*/

//* FIRST ROUND 🥊 
// I'm not sure what to say about this approach... 🤣
// I feel like I'm doing *too much* to complete this task
//! using Object.values, then spread syntax, then a Set constructor, then a string method and an array method feels overkill AF

function mutation(arr) {
    // first, isolate the array elements 
    // cast them into lowercase, then split them into letters with .split
    // finally, create a SET (an array - but with NO DUPLICATES ALLOWED) using Set constructor and spread syntax 
    const firstWordSet = Object.values([...new Set(arr[0].toLowerCase().split(""))]);
    const secondWordSet = Object.values([...new Set(arr[1].toLowerCase().split(""))]);
    // console.log(typeof firstWordSet) --> object
    console.log(firstWordSet, secondWordSet);
    
    // iterate through secondWord set, seeing if all the letters there also occur in firstWordSet 
    // we'll check for that by looking for an index less than -1 , meaning it was there
    for (let i=0; i<secondWordSet.length; i++) {
      if (firstWordSet.indexOf(secondWordSet[i]) < 0) {
        // if we get to this part of the loop, then the character is NOT in firstWordSet 
        return false;
      }
    }
    // if we complete the loop never hitting a false return, then all the letters were included 
    return true;
  }

//* SECOND ROUND 🥊🥊 
//* this time using array method 🌈every🌈
/* ------------------------------- pseudo-code ------------------------------ */
// The logic won't change that much, at its core, but the approach will simplify the operations, and make things way more DRY
// * First we'll grab the second string - the operations will be done on this string
// cast to lowercase to make things easier to reason about 
// split into array of letters 
// * use .every() method 
// for every letter of the second word, we'll check for the index of that letter in the first word 
// * if the index is higher than -1 then we know we found it *somewhere* 

function everyMutation(arr) {
    return arr[1]
        .toLowerCase()
        .split("")
        .every((letter) => {
            return arr[0].toLowerCase().indexOf(letter) != -1; 
            // if .indexOf does not find an occurence of the letter it will return -1 
            //* with this expression, if every letter of the second string is in the first string (regardless of case or frequency) .every will return TRUE - else FALSE 
        }); 
}

