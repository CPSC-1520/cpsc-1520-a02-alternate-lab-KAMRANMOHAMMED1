console.log('My basic-math.js has loaded');

let answer = 23 % 10;
console.log(`The remainder of 23 divided evenly by 10 is ${answer}.`);

// Math function for the square root
let adjacent = 4;
let opposite = 3;
let hypotenuse = Math.sqrt(adjacent**2 + opposite**2);
message = `My triangle has sides of length ${adjacent}, ${opposite} and ${hypotenuse}.`;
console.log(message);

// Rounding errors
let floating = 0.1 + 0.2; // What's the answer?
console.log(`0.1 + 0.2 is ${floating}`);

answer = Math.round(floating * 10) / 10;
console.log(`After rounding, the correct answer is ${answer}`);

// Another triangle
adjacent = 5;
opposite = 12;
hypotenuse = Math.hypot(adjacent, opposite);
message = `My other triangle has sides of length ${adjacent}, ${opposite} and ${hypotenuse}.`;
console.log(message);


// Declare our own function
function roundToDecimals(num, decimals) {
    let factor = Math.pow(10, decimals);
    return Math.round(num * factor) / factor;
}

// Another rounding error...
console.log("Here's another rounding error:");
console.log(`4.32 + 4.78 equals ${4.32 + 4.78}`);

// Use our custom function
console.log("Let's fix the calculation:");
floating = 4.32 + 4.78;
answer = roundToDecimals(floating, 2);
console.log(`4.32 + 4.78 equals ${answer}`);

console.log(`PI is ${Math.PI}`);
console.log(`I find ${roundToDecimals(Math.PI, 5)} is all I can memorize.`);

// Another rounding error...
floating = 159 - 194.1193; // produces -35.11930000000001
answer = floating.toFixed(4); // the expected # digits
message = `Subtract 194.1193 from 159: ${answer}`;
console.log(message);

let original = parseFloat(answer)+ 194.1193;
message = `Add ${answer} and 194.1193: ${original}`;
console.log(message);

// Convert a string to a number.
console.log('Includes the decimal portion:', parseFloat('3.75'));
console.log('Exclude the decimal portion:', parseInt('3.75'));

console.log('About PI:', parseFloat('3.14 is PI')); // Outputs 3.14

console.log('The price is:', parseFloat('$ 4.97'));

// Remember how we can convert a number to a string?
let total = 10 * 5.95; // quantity times unit price
let money = `$ ${total.toFixed(2)}`;
console.log('For math, I need numbers: ', total);
console.log('I use strings to show as money: ', money);