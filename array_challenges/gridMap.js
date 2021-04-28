//* ❓ Map over a List of Lists

/* ------------------------------- description ------------------------------ */
/*
    Write a function which maps a function over the lists in a list:

    function gridMap(fn,xss) { return [[]]; }
    Example 1:

    const xss = [ [1,2,3]
                , [4,5,6]
                ];

    gridMap( x => x+1 , xss )  =>  [[2,3,4],[5,6,7]]
    gridMap( x => x**2 , xss )  =>  [[1,4,9],[16,25,36]]
    Example 2

    const xss = [['h','E','l','l','O'],['w','O','r','L','d']];

    gridMap( x => x.toUpperCase() , xss )  =>  [['H','E','L','L','O'],['W','O','R','L','D']]
*/

//* FIRST ROUND 🥊
// brute force, two for loops over the arrays 

function gridMap(fn, a) {
    // init array data structure to store results
    let arr = []
    // init array data structure to hold temporary result of each iteration
    let result = []
    // begin loop through a (array of arrays)
    for (let i = 0; i < a.length; i++) {
      // begin loop through subarray
      for (let j = 0; j < a[i].length; j++) {
        // temp variable performs the function on each element of a sub array
        let temp = fn(a[i][j]);
        // pushing the results for each
        result.push(temp); 
      }
      // at the end of a sub-array push the results to the return array
      arr.push(result); 
      // and clear the result variable
      result = []; 
    }
    
    return arr;
}

//* SECOND ROUND 🥊🥊 
// Using 🌈array.prototype.map🌈

function gridMap(fn, a) {
    return a.map(subarr => {
      return subarr.map(fn); 
    }); 
}

//* Direct return 

function shortGridMap(fn, a) {
    return a.map(subarr=>subarr.map(fn)); 
}