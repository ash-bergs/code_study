//* ❓ Find Minimum and Maxiumum
/* ------------------------------- description ------------------------------ */
/*
Your task is to make two functions, max and min (maximum and minimum in PHP and Python) that take a(n) array/vector of integers list as input and outputs, respectively, the largest and lowest number in that array/vector.

#Examples

max([4,6,2,1,9,63,-134,566]) returns 566
min([-52, 56, 30, 29, -54, 0, -110]) returns -110
max([5]) returns 5
min([42, 54, 65, 87, 0]) returns 0
#Notes

You may consider that there will not be any empty arrays/vectors.
*/

var min = function(list){
    // highest value in list
    // sort the list 
    // return the first index value 
    let sortedList = list.sort((a, b) => {
      return a - b; 
    });
    return sortedList[0];
}

var max = function(list){
    // lowest in list 
    // this time sort the list in reverse order - b - a --> if the result of this is POSITIVE then b will preceed a in the finalized order 
    // in other words, the list will be descending 
    let sortedList = list.sort((a,b) => {
      return b - a;
    });
    return sortedList[0];
}

/* ----------------------------- 📝 Sort() Notes ---------------------------- */
// * Sort - built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.
// * Returns a new array, without modifying the existing array 
// * The time and space complexity of the sort cannot be guaranteed as it depends on the implementation.

// Basic usage for the `sort` array method pertains to an array of strings, elements will be sorted *alphabetically* 
// ex - const myArray = ["dom", "js", "css"]; 
// const newArray = myArray.sort(); 
// --> newArray = ["css", "dom", "js"]

// ! But this array is an array of *numbers*, including negative numbers. 
// To sort integers, the sort() converts the integers to strings and scores them using UTF-16 code units values 
// * We can pass a *compare function* to supply a different logic to sort the array, passed as a callback function 
// * The compare function takes two arguments - they are both objects from the original array 
// * when this function returns a NEGATIVE value that means that a is before b in the finalized sorted array
// * when the return is a positive number, that means that b will before a in the finalized sorted array 
// * 0 - both elements the same, next to each other 