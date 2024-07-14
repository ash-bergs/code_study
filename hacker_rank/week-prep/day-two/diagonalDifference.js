'use strict';

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

function diagonalDifference(arr) {
  const rows = arr.length;
  let rightToLeftSum = 0;
  let leftToRightSum = 0;

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
