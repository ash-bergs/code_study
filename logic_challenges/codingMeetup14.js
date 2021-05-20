//* ❓ Coding Meetup Challenge # 14 

// The focus of this coding challenge was 🌈 Higher Order Functions 🌈 
/* ------------------------------- description ------------------------------ */
/*
    You will be given an array of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.

Your task is to return an object which includes the count of food options selected by the developers on the meetup sign-up form..

For example, given the following input array:

var list1 = [
  { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C', 
    meal: 'vegetarian' },
  { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript', 
    meal: 'standard' },
  { firstName: 'Ramona', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby', 
    meal: 'vegan' },
  { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C', 
    meal: 'vegetarian' },
];
your function should return the following object (the order of properties does not matter):

{ vegetarian: 2, standard: 1, vegan: 1 }
Notes:

The order of the meals count in the object does not matter.
The count value should be a valid number.
The input array will always be valid and formatted as in the example above.
there are 5 possible meal options and the strings representing the selected meal option will always be formatted in the same way, as follows: 'standard', 'vegetarian', 'vegan', 'diabetic', 'gluten-intolerant'.




This kata is part of the Coding Meetup series which includes a number of short and easy to follow katas which have been designed to allow mastering the use of higher-order functions. In JavaScript this includes methods like: forEach, filter, map, reduce, some, every, find, findIndex. Other approaches to solving the katas are of course possible.
*/

/* -------------------------------------------------------------------------- */
/*                           About my first attempt                           */
/*
    My first attempt never got off the ground... This is a kata that I chose to view the answers. 
    
    My original thought was the use forEach, but along the way I decided to attempt creating an array of each attendent's meal choice
    Resulting in an array like [vegetarian, vegan, vegan, standard]
    THEN I tried to use Object.values to create an object with keys that were the meal choice, and a value indicating how many times it occured in the source array 

    I just couldn't seem to wrap my head around how to create that object. 
    Here is that attempt: 

    function orderFood(list) {
  / LIST - array of objects 
  / return - object where meal types are thee keys and number of orders are the values 
  / higher order functions - forEach, filter, map, reduce, some, every, find, findIndex
  
  const mealChoices = Object.values(list.reduce((obj, { meal }) => {
    if (obj[meal]=== undefined){
      console.log(meal)
      obj[meal] =  meal; 
    } else {
      obj[meal] += 1; 
    }
    return obj; 
  }, {})); 
  
  console.log(mealChoices); 
}
*/
/* -------------------------------------------------------------------------- */

//* Using 🌈array.prototype.forEach🌈

function orderFood(list) {
    // return is an object, we'll init that now
    const meals = {};
    
    // forEach does not return anything - it performs a function for each item in the source array
    list.forEach(function (item) {
      // hasOwnProperty() does a check to see if that meal has already occurred - boolean return
      // if it HAS, increment the count it points to by one
      // if it hasn't, init the count at 1 
      meals[item.meal] = meals.hasOwnProperty(item.meal) ? meals[item.meal] + 1 : 1;
    });
    
    return meals;
}