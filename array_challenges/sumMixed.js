//* ❓ Sum Mixed 
/* ------------------------------- description ------------------------------ */

// * FIRST ROUND SOLUTION 

function sumMix(nums){
    let newNums = []; 
    // iterating through the array, making sure all numbers are Integer type 
    for (let i=0; i<nums.length; i++){
        newNums.push(parseInt(nums[i])); 
    }
    
    return newNums.reduce((accumulator, currentVal) => {
        return accumulator + currentVal; 
     }, 0);  
} 

// * SECOND ROUND SOLUTION 
// I'm initializing a variable I don't really need... and looping through the array twice
// we can avoid looping twice by doing everything in one statement - converting strings into integers in the .reduce 

function refactoredSumMix(nums) {
    return nums.reduce((count, currentVal) => {
        return count + parseInt(currentVal); 
    }); 
}