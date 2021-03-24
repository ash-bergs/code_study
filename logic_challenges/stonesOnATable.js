//* ❓ Stones on a Table 

/* ------------------------------- description ------------------------------ */
/*
There are some stones on Bob's table in a row, and each of them can be red, green or blue, indicated by the characters R, G, and B.

Help Bob find the minimum number of stones he needs to remove from the table so that the stones in each pair of adjacent stones have different colours.

Examples:

"RGBRGBRGGB"   => 1
"RGGRGBBRGRR"  => 3
"RRRRGGGGBBBB" => 9
*/

//* FIRST ROUND SOLUTION 

function solve(stones) {
    // stones is a string - return number 
    // iterate through the string, checking i
    let count = 0;
    // iterate through the string 
    for (let i = 0; i < stones.length - 1; i++){
      // comparing i to i + 1 
      // if they are the same increment a count 
      if (stones[i] == stones[i + 1]){
        count += 1;
      }
    }
    
    // return count 
    return count;
}

//? Reflection 
// use reduce to achieve this function? 