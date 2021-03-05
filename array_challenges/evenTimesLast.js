//* ❓ Even Times Last 

/* ------------------------------- description ------------------------------ */
/*
Given a sequence of integers, return the sum of all the integers that have an even index, multiplied by the integer at the last index.

If the sequence is empty, you should return 0.

* this one should be fairly easy, we can use `filter` and `reduce` again
*/

function evenLast(numbers) {
    // grab the last element and isolate it 
    const lastIndex = numbers[numbers.length -1]; 
    // create an array of all the numbers with an even index 
    // in the callback function pass element and index, filter by index that when divided by 2 have no remainder (are even)
    const evenIndexNums = numbers.filter((el, index) => index % 2 === 0); 
    
    // The reduce array method returns a single value
    return evenIndexNums.reduce((a, b) => {
      // reduce takes in a (the accumulator - starts at 0) and b (elements of evenIndexNums)
      // multiply current element by the last index
      // this is the action we're performing on each element of the array
      b = b * lastIndex
      // add it to the accumulator and continue
      return a + b; 
    }, 0);
}

//TODO 🧨💪 Can you one-line it? 

function refactoredEvenTimesLast(numbers) {
    return numbers.filter((el, index) => index % 2 === 0).reduce((a,b) => {
        b = b * numbers[numbers.length - 1]; 
        return a + b; 
    }, 0); 
}