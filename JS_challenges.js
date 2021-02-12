/* -------------------------------------------------------------------------- */
/*                           Challenge: Who Likes It                          */
/* 
    You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

    Implement a function likes :: [String] -> String, which must take in input array, containing the names of people who like an item. It must return the display text as shown in the examples:

    likes [] -- must be "no one likes this"
    likes ["Peter"] -- must be "Peter likes this"
    likes ["Jacob", "Alex"] -- must be "Jacob and Alex like this"
    likes ["Max", "John", "Mark"] -- must be "Max, John and Mark like this"
    likes ["Alex", "Jacob", "Mark", "Max"] -- must be "Alex, Jacob and 2 others like this"
*/
/* -------------------------------------------------------------------------- */

// Original solution - truly brute force 

function likes(names) {
    // getting the length for brevity 
    people = names.length; 

    if (people === 0){
        return "no one likes this"; 
    } else if (people === 1) {
        return `${names[0]} likes this`; 
    } else if (people === 2) {
        return `${names[0]} and ${names[1]} likes this`;
    } else if (people === 3) {
        return `${names[0]}, ${names[1]} and ${names[2]} likes this`;
    } else {
        return `${names[0]}, ${names[1]} and ${people - 2} others likes this`;
    }

}

// using a switch statement - not really saving much time or space, but it is easier to read. 

function switchcaseLikes(names) {
    names = names || [];
    switch(names.length){
      case 0: return 'no one likes this'; break;
      case 1: return names[0] + ' likes this'; break;
      case 2: return names[0] + ' and ' + names[1] + ' like this'; break;
      case 3: return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this'; break;
      default: return names[0] + ', ' + names[1] + ' and ' + (names.length - 2) + ' others like this';
    }
  }
  