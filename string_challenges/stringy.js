//* ❓ "Stringy"
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