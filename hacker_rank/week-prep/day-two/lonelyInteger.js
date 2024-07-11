'use strict';

/** Details:
 * Given an array of integers, where all elements but one occur twice, find the unique element.
 
* lonelyinteger has the following parameter(s):
 * int a[n]: an array of integers
 * Returns
 * int: the element that occurs only once
 */

const fs = require('fs');

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
 * Complete the 'lonelyinteger' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */
/* ------------------------------ FIRST ATTEMPT ----------------------------- */

function lonelyinteger(a) {
  // Bitwise XOR (^)
  // Coerces both values in the comparison to numbers
  // And compares them bitwise - meaning the 1st bit of the 1st integer is compared to the second bit of the second integer, and so on
  // effectively cancels out the pairs, leaving the unique integer
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_XOR
  return a.reduce((acc, curr) => acc ^ curr, 0);
}

/* ---------------------------- END FIRST ATTEMPT --------------------------- */

/* ----------------------------- SECOND ATTEMPT ----------------------------- */

function lonelyinteger(a) {
  // Make a hash map
  const counts = {};

  for (const int of a) {
    // every time we come to a number we've seen, increment count
    if (counts[int]) counts[int] += 1;
    // or init a new value in counts
    else counts[int] = 1;
  }

  for (const count in counts) {
    if (counts[count] === 1) return console.log(parseInt(count));
  }
}

/* --------------------------- END SECOND ATTEMPT --------------------------- */

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine().trim(), 10);

  const a = readLine()
    .replace(/\s+$/g, '')
    .split(' ')
    .map((aTemp) => parseInt(aTemp, 10));

  const result = lonelyinteger(a);

  ws.write(result + '\n');

  ws.end();
}
