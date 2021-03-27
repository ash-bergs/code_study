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
//* FIRST ROUND SOLUTION 
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

//* SECOND ROUND SOLUTION 
// This solution is more semantic, and doesn't require an addtional count variable 
function refactoredFactorialize(num) {
    // instead of i, we'll call the variable what it is - the product 😎 starts at 1 for the same reason count did
    for (let product = 1; num > 0; num--) {
        // the condition checks that num is greater than zero, and decrements each loop
      product *= num;
    }
    return product;
  }

//* THIRD ROUND SOLUTION 
// This time with 🌈recursion🌈
// This kind of challenge is a great chance to use recursion 
function factorializeNumRecursive(num) {
    if (num === 0) {
        // this terminal condition ensures the function doesn't enter an infinite loop! 
        // if num is 0, we'll return 1
        // and we know from the conditions that num will always be greater or equal to 1
        return 1; 
    }
    // outside of the loop (where we know that num is greater than 1)
    return num * factorializeNumRecursive(num - 1); 
    // this will keep going (recursively!) multiplying num by itself minus 1, until it reaches 0
}

  