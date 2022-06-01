/** Instructions:
 * Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

Example
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
The returned format must be correct in order to complete this challenge.
Don't forget the space after the closing parentheses!
 */

//* Round One: Brute Force - String Interpolation

function createPhoneNumber(numbers){
    const prefix = `(${numbers.slice(0,3).join('')})`;
    const suffix = ` ${numbers.slice(3, 6).join('')}-${numbers.slice(6).join('')}`
    return prefix + suffix
  }

//* Round Two: Refinement - .replace() method
function createPhoneNumber(numbers){
    return numbers.join('').replace(/(...)(...)(.*)/, '($1) $2-$3');
  }

/** Notes:
 * In this solution we start by making a string from the array of numbers with `.join`
 * Then we employ the `.replace` method, providing a pattern and replacement in the form of a regexp
 * 
 * However this comment is interesting to note on the challenge discussion (https://www.codewars.com/kata/525f50e3b73515a6db000b83/solutions/javascript)
 * "This was the first solution I went with. It's certainly the clearest and most maintainable.
 * I then went for speed and found joining then extracting the chunks via substr took less than a third of time to run."
 */