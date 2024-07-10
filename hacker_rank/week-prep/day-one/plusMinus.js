'use strict';

/**
 * Details:
 * Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with  places after the decimal.
 * 
 * Input Format
 * The first line contains an integer,n, the size of the array.
 * The second line contains  space-separated integers that describe arr[n].
 * 
 * Output Format

 * Print the following  lines, each to  decimals:
 * proportion of positive values
 * proportion of negative values
 * proportion of zeros
 * 
 * Note: This challenge introduces precision problems. The test cases are scaled to six decimal places, though answers with absolute error of up to  are acceptable.

 */

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on('end', function () {
  inputString = inputString.split('\n');

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 * 
 * Basically, the crux of the problem here is:
  Given an array of 'n' numbers
  determine the ratio of numbers from the array that are positive, negative, or 0
  and return in specified output, with 6 decimal places
 */

/* ------------------------------ FIRST ATTEMPT ----------------------------- */
/**
 * Brute force - using a for-loop and some variable buckets to keep track of things
 * Gets the job done, but could be better....
 * However recursion isn't really useful in this counting problem (lots of overhead fn calls)
 */
// 0(n) - but that's the best we can achieve in a problem where we need to look at each element in an array at least once
// function plusMinus(arr) {

//   // buckets to keep count
//   // initializing these is constant time - 0(1)
//   const n = arr.length;
//   let positiveCount = 0;
//   let negativeCount = 0;
//   let zeroCount = 0;

//   // loop through the array - linear operation - 0(n)
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 0) zeroCount += 1;
//     if (arr[i] > 0) positiveCount += 1;
//     if (arr[i] < 0) negativeCount += 1;
//   }

//   // print each ratio
//   // log statements constant? 0(1)?
//   console.log((positiveCount / n).toFixed(6));
//   console.log((negativeCount / n).toFixed(6));
//   console.log((zeroCount / n).toFixed(6));
// }

/* ---------------------------- END FIRST ATTEMPT --------------------------- */

/* ----------------------------- SECOND ATTEMPT ----------------------------- */
/**
 * Went with a more "es6-y" approach here
 * Since we can't really improve the time complexity, we can make it more modern and readable
 * Uses forEach method, and utilizes objects over number variables
 *
 * Note: this isn't faster than the first attempt!
 * A regular ol' for-loop has less function call overhead and will be preferred in performance-sensitive operations
 */
function plusMinus(arr) {
  const n = arr.length;
  // use an object to track counters
  const counts = {
    positive: 0,
    negative: 0,
    zero: 0,
  };

  // forEach instead of a for-loop
  arr.forEach((number) => {
    if (number > 0) counts.positive += 1;
    if (number < 0) counts.negative += 1;
    counts.zero += 1;
  });

  // destructure counts for return
  const { positive, negative, zero } = counts;

  console.log((positive / n).toFixed(6));
  console.log((negative / n).toFixed(6));
  console.log((zero / n).toFixed(6));
}

/* --------------------------- END SECOND ATTEMPT --------------------------- */
function main() {
  const n = parseInt(readLine().trim(), 10);

  const arr = readLine()
    .replace(/\s+$/g, '')
    .split(' ')
    .map((arrTemp) => parseInt(arrTemp, 10));

  plusMinus(arr);
}
