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
//* FIRST ROUND SOLUTION 🥊
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

//* SECOND ROUND SOLUTION 🥊🥊
// This solution is more semantic, and doesn't require an addtional count variable 
function refactoredFactorialize(num) {
    // instead of i, we'll call the variable what it is - the product 😎 starts at 1 for the same reason count did
    for (let product = 1; num > 0; num--) {
        // the condition checks that num is greater than zero, and decrements each loop
      product *= num;
    }
    return product;
  }

//* THIRD ROUND SOLUTION 🥊🥊🥊
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

//* FOURTH ROUND SOLUTION 🥊🥊🥊🥊 
// Coming back with another recursive function - but this time it's 🌈tail recursion🌈
//* notes about recursion: 
// - Remember, every recursive call has to complete *before* the interpretor begins the work of actually add this results (or multiplying them as in this case)
//? - In tail recursion this works a little differently, with each evaluation of a recursion happening sequentially 
// done correctly, tail recursion can never result in a stack overflow, because the stack frame will finish executing with each recursive call 
// this makes tail recusion a good solution for optimizing programs! 

function tailRecursiveFactorializeNum(num, factorial = 1) {
    if (num == 0) {
        return factorial; 
    } else {
        return tailRecursiveFactorializeNum(num - 1, factorial * num);
    }
}

/* ---------------------- More about 🌈Tail Recursion🌈 --------------------- */
/*
This one stopped me up a bit, so I want to spend some more time understanding it. Tail recursion can work to make a program more performant (if applicable) because it never creates more than one stack frame at a time 
? Is it only one, truly? Or is there some abstracted complexity going on here? 
Whereas in head recursion (or just what we think of as recursion), where frames stack up until a base case it hit 

Calling this function looks something like this: 
(shortened function name for brevity)

factorialize(5)
--> num | 5
--> facorital | 1 (default value)
! before continuing, operations are performed, and the parameters are updated 
--> num - 1 | 4
--> factorial * num | 5 

Going in to the next function call, num is 4, and factorial is 5 

factorialize(4, 5)
num is still not 0, so we'll continue on to performing the operations 
--> num | 4
--> factorial | 5 
--> 4 - 1 | 3
--> 5 * 4 | 20 

! notice that factorial and num are updated each "go" 

factorialize(3, 20) 
--> num | 3
--> factorial | 20
--> 3 - 1 | 2
--> 20 * 3 | 60

factorialize(2, 60)
--> num | 2
--> factorial | 60
--> 2 - 1 | 1
--> 60 * 2 | 120 

factorialize(1, 120)
--> num | 1
--> factorial | 120
--> 1 - 1 | 0 
--> 120 * 1 | 120 

factorialize(0, 120) 
! --> num | 0 - we've hit the terminal condition 
--> return factorial which is 120

The function has completed, and only one stack frame was used at a time to complete it! 
*/