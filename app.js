console.log('Hello World!');
console.log();

let quantity = 10;
let price = 5.95;
let message;

message = 'The following is a series of demos';
console.log(message);

let total = quantity * price;

message = 'The total amount is $' + total;
console.log(message);

console.log(`total is a ${typeof total}`);
console.log(`message is ${typeof message}`);

let amount = total.toFixed(2);
console.log(`the total amount is $ ${amount}`);

message = `I used .toFixed(2) to convert a ${typeof total} into a ${typeof amount}`;
console.log(message);

quantity = 20;
message = `\n\tChanging quantity to ${quantity} does not cause previous calculations to be re-evaluated.\n\tTotal is still ${total} and amount is still ${amount}.`;
console.log(message)

let discount = 2.15;
total = total - discount;


// More Simple Sequence
 discount = 2.15;
total = total - discount;
message = 'A discount was applied to your total.';
console.log(message);


message = `The new total is $ ${total}`;
console.log(message);

message = `The discount is $ ${discount}.`;
console.log(message);

message = `The original price was$ ${amount}`;
console.log(message);



