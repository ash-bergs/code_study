//* ❓ Reversed String 

/* ------------------------------- description ------------------------------ */
/* 
Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
*/

//! Using what I learned in solving the reversedWords function, I used the same approach to reversing a string 

function solution(str){
    // split the str into individual letters (characters) - .split('')
    // reverse the split letters in-place - .reverse()
    // join the reversed characters and return as one string - .join('')
    return str.split('').reverse().join(''); 
}
