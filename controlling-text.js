console.log('Exploring strings in JavaScript');
console.log('===============================');
console.log();

function logText(text) {
    console.log(`The text '${text}' is ${text.length} characters long.`);
  }

  logText('This is a test');
logText(''); // An empty string

// At some point, a string may have leading or trailing whitespace
let input = '   User Input  ';
logText(input);
logText(input.trimStart());
logText(input.trimEnd());
logText(input.trim());

// Let's output it one more time
logText(input);

input = '\n\tEscape Characters\t\t';
logText(input);
logText(input.trim());
logText('\t'); // Tab character
logText('\n'); // Newline character

logText('\t'); // Tab character
logText('\n'); // Newline character

console.log(); // a blank line
let heading = 'Manipulating Text';
console.log(heading.toUpperCase());

let underline  = ''.padEnd(heading.length, '-');
console.log(underline);

console.log(); // a blank line
function logLineItem(description, amount) {
    let colA = description.padEnd(15);
    let colB = amount.padStart(8);
    console.log(`| ${colA} | $ ${colB} |`);
}

let blank = '';
let colABorder = blank.padStart(17, '-');
let colBBorder = blank.padStart(12, '-');
let border = `|${colABorder}|${colBBorder}|`;

let regularDice = 4.32;
let trickDice = 4.78;
let total = regularDice + trickDice;

console.log(border);
logLineItem('Regular Dice', regularDice.toFixed(2));
logLineItem('Trick Dice', trickDice.toFixed(2));

console.log(border.replaceAll('-', '='));

logLineItem('Total', total.toFixed(2));
console.log(border);

let ending = 'The End';
let length = ending.length;
// Reformat
console.log(ending.toLowerCase().padStart(length + 4, '\n-- ').padEnd(length + 7, ' --'));
