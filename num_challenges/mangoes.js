//* ❓ Price of Mangoes 
/* ------------------------------- description ------------------------------ */
/*
    There's a "3 for 2" (or "2+1" if you like) offer on mangoes. For a given quantity and price (per mango), calculate the total cost of the mangoes.
*/

//* FIRST ROUND 🥊 

function mangoes(quantity, price) {
    const fullPriceMangoes = quantity - Math.floor(quantity / 3); 
    return fullPriceMangoes * price; 
}

//* SECOND ROUND 🥊🥊 
// This solution is the same as the one prior, but less declarative and simplified 😊😊

function simpleMangoes(quantity, price) {
    return price * (quantity - Math.floor(quantity / 3)); 
}