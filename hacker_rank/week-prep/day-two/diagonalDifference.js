'use strict';

/**
 * Details:
 * Given a square matrix, calculate the absolute difference between the sums of its diagonals.

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
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

/* ----------------------------- FIRST SOLUTION ----------------------------- */
function diagonalDifference(arr) {
  const rows = arr.length;
  let rightToLeftSum = 0;
  let leftToRightSum = 0;

  // creates a single loop through the array with a constant number of operations per iteration (2 sums)
  // making this solution 0(n) with n being the number of rows - and we process each row once
  for (let i = 0; i < rows; i++) {
    // for each row....
    // add left to right the item that is at [i][i] (so, [0][0], [1][1], and so on)
    leftToRightSum += arr[i][i];
    // add right to left the item that is in the row at i
    // starting at the last index, basically [0][arr.length - 1] since i will be 0
    // and shifting one cell to the left the next time
    // becoming arr[1][arr.length - 1 - 1] - or the item right before the end of the array
    // the next loop we'll get the cell right before the last and so on
    rightToLeftSum += arr[i][rows - 1 - i];
  }

  const difference = Math.abs(leftToRightSum - rightToLeftSum);
  return difference;
}
/* --------------------------- END FIRST SOLUTION --------------------------- */

/* ---------------------------- SECOND SOLUTIONS ---------------------------- */
// This solution will also be O(n) - but use a map and reduce
// even though we use 2 maps we increase the slope of the line, but it is still a line
// because it's linear 0(n) + 0(n) = 0(2n) and reduces to 0(n)
// And given the nature of the problem, this is the optimal time complexity we can achieve
function diagonalDifferenceMapReduce(arr) {
  const rows = arr.length;

  const leftToRightSum = arr
    // first loop 0 - arr[0], second loop 1, arr[1], and so on, getting each singular cell from each column as we go
    .map((row, i) => row[i])
    // and reduce to a single sum starting from 0
    .reduce((a, b) => a + b, 0);

  const rightToLeftSum = arr
    // same as above, we get the item n steps to the left of the last cell according to the number of loops we've done
    .map((row, i) => row[rows - 1 - i])
    .reduce((a, b) => a + b, 0);

  return Math.abs(leftToRightSum - rightToLeftSum);
}
/* --------------------------- END SECOND SOLUTION -------------------------- */

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine().trim(), 10);

  let arr = Array(n);

  for (let i = 0; i < n; i++) {
    arr[i] = readLine()
      .replace(/\s+$/g, '')
      .split(' ')
      .map((arrTemp) => parseInt(arrTemp, 10));
  }

  const result = diagonalDifference(arr);

  ws.write(result + '\n');

  ws.end();
}
