//* ❓ Count Duplicates 
/*
    Count the number of Duplicates
    Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

    Example
    "abcde" -> 0 # no characters repeats more than once
    "aabbcde" -> 2 # 'a' and 'b'
    "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
    "indivisibility" -> 1 # 'i' occurs six times
    "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
    "aA11" -> 2 # 'a' and '1'
    "ABBA" -> 2 # 'A' and 'B' each occur twice
*/

//* FIRST ROUND 🥊
// My first thought it to split the string
// then iterate through the resulting array, counting the number of times chars occur 
// ? I could probably use more than one array method here, but 🌈array.prototype.map🌈 is the first one that comes to mind 

function duplicateCount(text){
    let count = 0; 
    let buffer = ''; 
    // sort the string before stepping through it 
    let sortedStr = text.toLowerCase().split('').sort().join(''); 
  
    for(var i = 0; i < sortedStr.length; i++) {
      // with the string sorted we can compare the elements sort of like a linked list
      // IF the current element is the SAME as the one next to it -> increment count and continue
      if (sortedStr[i] == sortedStr[i+1]  && sortedStr[i] != buffer) {
          // if there is more than 1 repeat we don't want to count that, thus the check `sortedStr[i] != buffer` 
        // if the current element is the same as the last, continue iterating without incrementing 
        buffer = sortedStr[i];
        count++;
        i++;
      }
    }
    return count;
}