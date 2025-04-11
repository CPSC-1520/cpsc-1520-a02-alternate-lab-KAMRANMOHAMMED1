console.log('Data Complexity in JavaScript');
console.log('===============================');
console.log();

// Primitive types: string, number, boolean
let fullName = 'Stewart Dent';
console.log(`The value ${fullName} is a ${typeof fullName}.`);
let age = 25;
console.log(`The value ${age} is a ${typeof age}.`);
let employed = true;
console.log(`The value ${employed} is a ${typeof employed}.\n`);

// Complex types: Objects - object literals (the (still popular) OG approach to creating objects)
let person = {
    name: 'Stewart Dent',
    age: 25,
    employed: true
};
console.log("Here is the data for a person:");
console.log(person);

// Remember: A variable's type is determined by the contents of the variable
console.log(`My person variable is an ${typeof person}.`);

console.log(`${person.name} is ${person.age} years old.\n`);

person.age = person.age + 1;
console.log(`${person.name} is now ${person.age} years old. Happy Birthday!\n`);

// Complex types: Date
let today = new Date(); // The current date/time
console.log(`Today is ${today}`);
console.log(`The year is ${today.getFullYear()}`);

console.log(`My today variable is an ${typeof today}.`);

console.log(`This date is ${today.getMonth()} months after January.`);
console.log(`The date portion is ${today.toDateString()}.`);
console.log(`The time portion is ${today.toTimeString()}.`);
console.log(`The complete date/time is ${today.toString()}.`);

today.setDate(1);
console.log(`Now the date is ${today.toDateString()}.`);

let yesterday = today.getDate() - 1; // should produce a 0
today.setDate(yesterday);
console.log(`The previous day was ${today.toDateString()}.`);

let hiredDate = new Date('January 5, 2022');
console.log(`Your first day of work will be ${hiredDate.toDateString()}.\n`);

// We can dynamically assign this value to our person object.
person.hiredOn = hiredDate;
console.log(`Here's ${person.name}'s latest information:`);

console.log(person);

let url = new URL("https://github.com/dagilleland/CPSC-1520");
console.log(`\nVisit ${url.toString()} for the source code of this website.\n`);
console.log(url);