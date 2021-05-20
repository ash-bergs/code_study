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

//* The "With a Little Help From Google" approach 
//? What if we can't use that oh-so-handy reverse method?

function reverse(str) {
    // using 🌈for loop🌈
    // no need to cast str into an array and then back into a string! 
    let reversedStr = ""; 

    // use a for loop to step *backwards* through the array 
    for (let i = str.length - 1; i >= 0; i--) { 
        // concatenate current index to reversedStr
        reversedStr += str[i]; 
    }

    return reversedStr; 
}