//* ❓ Will There be Enough Space? 

/* ------------------------------- description ------------------------------ */
/*
    The Story:
    Bob is working as a bus driver. However, he has become extremely popular amongst the city's residents. With so many passengers wanting to get aboard his bus, he sometimes has to face the problem of not enough space left on the bus! He wants you to write a simple program telling him if he will be able to fit all the passengers.

    Task Overview:
    You have to write a function that accepts three parameters:

    cap is the amount of people the bus can hold excluding the driver.
    on is the number of people on the bus excluding the driver.
    wait is the number of people waiting to get on to the bus excluding the driver.
    If there is enough space, return 0, and if there isn't, return the number of passengers he can't take.

    Usage Examples:
    cap = 10, on = 5, wait = 5 --> 0 # He can fit all 5 passengers
    cap = 100, on = 60, wait = 50 --> 10 # He can't fit 10 of the 50 waiting
*/

//* FIRST ROUND 🥊 
// Brute force solution using 🌈if loops🌈

function enough(cap, on, wait) {
    if (on + wait < cap) {
        // if the amount of people on, and the amount waiting added together are less than the cap, return 0
        return 0; 
    } else {
        // else, we need to return the amount of people that cannot fit on this bus 
        // cap - on will let us know how many seats are available, taking that number from wait will result in the number of passengers waiting for the next bus
        return wait - (cap - on)
    }
}

//* SECOND ROUND 🥊🥊
//* This time using the 🌈Math libaray (Math API)🌈 

function mathEnough(cap, on, wait) {
    return Math.max(wait + on - cap, 0); 
    //! Math.max will return the higher number of the two arguments - wait + on - cap OR 0
    //* If the number of people WAITING added to the number of people already ON minus the CAPACITY is a negative number - that means there were seats left unfilled 
    // if 3 people are waiting, and 2 people are on, and the capacity is 10 --> 3 + 2 = 5 --> 5 - 10 = -5 <-- 5 seats left unfilled. 
    // whereas is 10 people are waiting, 6 people are on, and the capacity is still 10 --> 10 + 6 = 16 --> 16 - 10 = 6 <-- 6 people will be left waiting for the next bus 
    // if the number is negative (there are seats remaining), we don't care how many seats are remaining, just that no one has to wait - return 0 
    // otherwise the number of passengers waiting will be higher of the two arguments, and will return 
}