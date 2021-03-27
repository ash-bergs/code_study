//* ❓ Factorialize Number 
/* ------------------------------- decription ------------------------------- */
/*
Factorialize a Number
Return the factorial of the provided integer.

If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

Factorials are often represented with the shorthand notation n!

For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

Only integers greater than or equal to zero will be supplied to the function.
*/

function factorialize(num) {
    // return the product of all integers less than or equal to num 
    // first instinct is to do this with a for loop 
    let count = 1; 
    // count starts at 1 because anything multiplied by 0 is 0 
    for (let i=num; i > 0; i--){
      count *= i; 
    }
    return count;
  }
  
factorialize(5);
// >>> 120