//* ❓ Finders Keepers 
/* ------------------------------- description ------------------------------ */
/* 
Create a function that looks through an array arr and returns the first element in it that passes a 'truth test'. This means that given an element x, the 'truth test' is passed if func(x) is true. If no element passes the test, return undefined.
*/

//* FIRST ROUND 🥊

function findElement(arr, func) {
    // iterate through the array 
    for (let i=0; i<arr.length; i++){
        // testing is the func invoked with arr[i] === true
      if (func(arr[i])){
        return arr[i]; 
      }
    }
    // if this part of the function is hit, none of the elements passed the test 
    return undefined;
}

//* SECOND ROUND 🥊🥊
// This may be a good occassion to use 🌈.map🌈
// the map array method performs an action (function) on each element in an array
// returns a new array, with elements passed through the function 

function mapFindElement(arr, func) {
    const resultsMap = arr.map(func); 
    // performing map returns new array - in this case an array of boolean values
    // above is shortened syntax, pulling the expression out could look something like: 
    // const resultsMap = arr.map(element => {
    //  return func(element); 
    // });
    //* now that we have an array of returned values, return the FIRST element that resolves to true 
    // .indexOf returns the first found value by default, use bracket notation to resolve to the outcome of the expression 
    return arr[resultsMap.indexOf(true)]; 
}

//* SECOND ROUND EDIT 
// can be shortened even further: 

function onelineFindElement(arr, func) {
    return arr[arr.map(func).indexOf(true)]; 
}

//? Discuss with Harrison: 
//? 🧠 Reflection: Is using .map more costly, from a CS standpoint? In the first solution the loop stops when we find the first passing element (I think 🤔), but in in the .map solution we're always iterating entirely through the array and performing the test on each element. Then we have to go through that array to return the first instance of true. 