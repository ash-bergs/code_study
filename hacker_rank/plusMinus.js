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
 */

function plusMinus(arr) {
  // basically, the crux of the problem here is:
  // Given an array of 'n' numbers
  // determine the ratio of numbers from the array that are positive, negative, or 0
  // and return in specified output, with 6 decimal places
  const n = arr.length;

  const getRatios = (arr, n) => {
    // buckets to keep count
    let positiveCount = 0;
    let negativeCount = 0;
    let zeroCount = 0;
    // loop through the array
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === 0) zeroCount += 1;
      if (arr[i] > 0) positiveCount += 1;
      if (arr[i] < 0) negativeCount += 1;
    }

    // we can get the ratios with the total length n
    return console.log(`
    ${(positiveCount / n).toFixed(6)}
    ${(negativeCount / n).toFixed(6)}
    ${(zeroCount / n).toFixed(6)}
    `);
  };

  return getRatios(arr, n);
}

function main() {
  const n = parseInt(readLine().trim(), 10);

  const arr = readLine()
    .replace(/\s+$/g, '')
    .split(' ')
    .map((arrTemp) => parseInt(arrTemp, 10));

  plusMinus(arr);
}
