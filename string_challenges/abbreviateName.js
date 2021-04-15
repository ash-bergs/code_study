//* ❓ Abbreviate Two Name 

/* ------------------------------- decription ------------------------------- */
/*
    Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

    The output should be two capital letters with a dot separating them.

    It should look like this:

    Sam Harris => S.H

    Patrick Feeney => P.F
*/

//* FIRST ROUND 🥊
// brute force
// 🌈split🌈 the two name string into two names 
// return the first character of each, concatenated with a ".", cast to uppercase 
function abbrevName(name){
    // split the name into each name 
    const names = name.split(" "); 
    
    // for each name return the first character 
    return names[0].charAt(0).toUpperCase() + "." + names[1].charAt(0).toUpperCase(); 
  }

//* SECOND ROUND 🥊🥊 
// A little more elegant solution using 🌈array.prototype.map🌈 and 🌈string.prototype.substr🌈

function mappedAbbrevName(names) {
    // return name.split(' ').map(x => x.substr(0, 1).toUpperCase()).join('.');
    return names.split(" ")
            // .substr method, this method accepts two arguments - the index to begin extracting, and a length 
            // we start at index 0 and grab just one character, the 0 index itself
                .map(name => name.substr(0, 1).toUpperCase())
                // concatenate both initials with a period
                .join(".")
}