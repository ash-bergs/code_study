'use strict';

/**
 * Details:
 * Given a time in -hour AM/PM format, convert it to military (24-hour) time.

 * Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
 * - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.
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
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */
/* ------------------------------ FIRST ATTEMPT ----------------------------- */
function timeConversion(s) {
  // extract data from the time string
  let [hours, minutes, secondsPeriod] = s.split(':');
  const seconds = secondsPeriod.slice(0, 2); // taking the first one
  const period = secondsPeriod.slice(2); // AM or PM

  // depending on if the time is AM or PM, we need to handle 12 differently
  if (period === 'AM' && hours === '12') hours = '00';
  // 12 will stay as is, anything
  if (period === 'PM' && hours !== '12')
    hours = (parseInt(hours, 10) + 12).toString();

  return `${hours}:${minutes}:${seconds}`;
}

/* ---------------------------- END FIRST ATTEMPT --------------------------- */

/* ----------------------------- SECOND ATTEMPT ----------------------------- */
/**
 * Again, just making this more modern, and more like what I think I'd see requested from past colleagues
 * 🌈 object oriented 🌈
 * Handy for when there's many different cases, and each can have increasingly complex comparisons/operations
 * Each case can be its own module if truly needed
 */

function timeConversion(s) {
  // extract data from the time string
  let [hours, minutes, secondsPeriod] = s.split(':');
  const seconds = secondsPeriod.slice(0, 2); // taking the first one
  const period = secondsPeriod.slice(2); // AM or PM

  // define the conversion logic with an object pointing to comparisons
  const hourConversion = {
    // if it's AM and the hour is 12, make it 00, otherwise leave it as is
    AM: (h) => (h === 12 ? '00' : h),
    // if it's PM and hour is 12, leave as is
    // otherwise parse integer (base-10) and add 12 & return as a string
    PM: (h) => (h !== 12 ? (parseInt(h, 10) + 12).toString() : h),
  };

  // convert the hours with our object
  const convertedHours = hourConversion[period](hours);

  return `${convertedHours}:${minutes}:${seconds}`;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const s = readLine();

  const result = timeConversion(s);

  ws.write(result + '\n');

  ws.end();
}
