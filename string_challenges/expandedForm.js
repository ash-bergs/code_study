//* ❓ Expanded Form Number 

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
