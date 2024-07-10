'use strict';

/**
 * Details:
 * Given five positive integers, find the minimum and maximum values
 * that can be calculated by summing exactly four of the five integers.
 * Then print the respective minimum and maximum values as a single line of two space-separated long integers.
 *
 *
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
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

/* ------------------------------ FIRST ATTEMPT ----------------------------- */
/**
 * Since we're only getting (and seem to be guaranteed as much) 5 integers, the brute force approach isn't terrible
 * We're summing 4 out of 5 - so the smallest sum will exclude the largest integer
 * Likewise the largest sum will exclude the smallest integer in the arry
 */

function miniMaxSum(arr) {
  // start by sorting the array - putting the items in order by value
  const sortedArr = arr.sort();
  // get the sum of all 5 of the items
  const totalSum = arr.reduce((sum, num) => sum + num, 0);
  // subtract the largest/smallest integer and return
  const largestSum = totalSum - sortedArr.shift();
  const smallestSum = totalSum - sortedArr.pop();

  console.log(`${smallestSum} ${largestSum}`);
}

function main() {
  const arr = readLine()
    .replace(/\s+$/g, '')
    .split(' ')
    .map((arrTemp) => parseInt(arrTemp, 10));

  miniMaxSum(arr);
}
