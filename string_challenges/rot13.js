//* ❓ Rot 13
/* ------------------------------- decription ------------------------------- */
/*
ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".
*/

//* FIST ROUND SOLUTION 

  function rot13(s) {
      // regex [A-Z] looks for all alphabetic chars, globally, and case insensitive 
    return s.replace(/[A-Z]/gi, c =>
        // instead of defining 1 'replacer', the replacer is given as an arrow function
      "NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm"[
          // this bracket notation uses .indexOf method to resolve to replacer index
          // hard coded in the 13-char shifted alphabet
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".indexOf(c) ] )
  }