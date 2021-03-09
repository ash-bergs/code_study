//* ❓ Who's the Killer?
/* ------------------------------- description ------------------------------ */
/*
Some people have been killed!
You have managed to narrow the suspects down to just a few. Luckily, you know every person who those suspects have seen on the day of the murders.

Task.
Given a dictionary with all the names of the suspects and everyone that they have seen on that day which may look like this:

{'James': ['Jacob', 'Bill', 'Lucas'],
 'Johnny': ['David', 'Kyle', 'Lucas'],
 'Peter': ['Lucy', 'Kyle']}
and also a list of the names of the dead people:

['Lucas', 'Bill']
return the name of the one killer, in our case 'James' because he is the only person that saw both 'Lucas' and 'Bill'
*/

//* Logic of this approach: Step through the keys and the people each suspect saw 
// keep track of the number of victims (names in DEAD) that each suspect (key) saw. 
// If the suspect saw the entirely of dead (== dead.length) - then by this logic, they must be the killer 

function killer(suspectInfo, dead) {
    // init var to track killer name (for return)
    let killer = ""; 

    // iterate through the keys of suspectInfo
    Object.keys(suspectInfo).forEach(function(key) {
        // count of how many victims the key (suspect) has seen
        let count = 0; 
        // step through the arrays of people the suspect at key saw 
        for (const victim in dead) {
        // if the suspect has seen the victim currently processed 
            if (suspectInfo[key].includes(dead[victim])) {
                count += 1; 
            }
        }
        // if the suspect has seen all of the victims, then they're the killer in this scenario
        if (count == dead.length) {
        killer = key; 
        }
    })
    return killer;
}