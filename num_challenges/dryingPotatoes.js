//* ❓ Drying Potatoes 
/* ------------------------------- description ------------------------------ */
/*
All we eat is water and dry matter.

John bought potatoes: their weight is 100 kilograms. Potatoes contain water and dry matter.

The water content is 99 percent of the total weight. He thinks they are too wet and puts them in an oven - at low temperature - for them to lose some water.

At the output the water content is only 98%.

What is the total weight in kilograms (water content plus dry matter) coming out of the oven?

He finds 50 kilograms and he thinks he made a mistake: "So much weight lost for such a small change in water content!"

Can you help him?

Write function potatoes with

int parameter p0 - initial percent of water-
int parameter w0 - initial weight -
int parameter p1 - final percent of water -
potatoesshould return the final weight coming out of the oven w1 truncated as an int.

Example:
potatoes(99, 100, 98) --> 50
*/

function potatoes(p0, w0, p1) {
    // p0 - % water, w0 - initial weight of potatoes, p1 - final % water
    // init variables for dryMatter - potato weight, wDry
    let percentDry, weightDry, w1;
    // dry matter is 100(%) - % water (initial)
    percentDry = 100 - p0;
    // 100 - 82 = 18 - percentage dry matter if percentage of water is 82
    // calculate total weight (not %) of dry matter per given batch of potatoes and water content
    weightDry = (w0*percentDry)/100;
    
    w1 = (100*weightDry)/(100-p1);
    console.log(weightDry)
    return Math.floor(w1);
}

//TODO I'm still not *quite* sure how this is working... meaning I "know" but I can't explain. I need to walk through the logic more.