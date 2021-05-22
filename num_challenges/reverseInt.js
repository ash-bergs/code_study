//* ❓ Reverse Integer 
/* ------------------------------- description ------------------------------ */
/*
    Given an integer, return an integer that is the reverse
     ordering of numbers.
 --- Examples
   reverseInt(15) === 51
   reverseInt(981) === 189
   reverseInt(500) === 5
   reverseInt(-15) === -51
   reverseInt(-90) === -9
*/

function reverseInt(n) {
    // 1. The first thing we care about, before being pos or neg, is simply reversing the number 
    // If we create a string representation of the number, then we know from previous exercises how to reverse its order!
    const reversedNum = n.toString().split("").reverse().join(""); 
    
    // 2. When a num is positive all things are fine, when neg the - appears at the end of the string. Let's fix that.
    // if original number n is less than 0, it's negative, and we'll lose the negative sign in the parsing process
    // to fix that multiply the number by -1, which will make it negative 
    if (n < 0) {
      return parseInt(reversedNum) * -1; 
    }
    // otherwise return normally - no pos-to-neg conversion  
    return parseInt(reversedNum); 
  }
  
  // const a = -1100;  
  // console.log(a.toString()); 
  // toString seems to preserve positive or negative status? 
  
  // const b = -56450000
  // console.log(b.toString().split("").reverse().join(""))
  // the return preserves the - symbol, but puts it at the end of the string