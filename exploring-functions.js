// Final version of displayHeading() function
const displayHeading = function (text, underline) {
    console.log(text);
    console.log("".padStart(text.length, underline));
};

displayHeading("Exploring Functions in JavaScript", '=');

const roundToDecimals = function (num, decimals) {
    let factor = Math.pow(10, decimals);
    let result = Math.round(num * factor) / factor;
    return result;
}

console.log(`roundToDecimals is a '${typeof roundToDecimals}'.`);

console.log('Here is the code:\n', roundToDecimals.toString());

const addition = function(first, second) {
    return first + second;
}

const multiplication = function(first, second) {
    return first * second;
}

const buildStepperFunction = function() {
    let currentStep = 1;
    return function(text) {
        let output = `${currentStep}) ${text}`;
        currentStep++; // Increment by 1
        console.log(output);
    }
}

const demoRounding = function(firstValue, secondValue, operation, precision) {
    const displayStep = buildStepperFunction()
    let title = `\nThis is a demo of rounding errors with ${operation.name}`;
    displayHeading(title, '-');
    console.log('JavaScript is susceptible to rounding errors. For example:');
    let result = operation(firstValue, secondValue);
    displayStep(`Combining ${firstValue} with ${secondValue} produced ${result}`);
    let correctResult = roundToDecimals(result, precision);
    displayStep(`The actual result should be ${correctResult}.`);
}

demoRounding(0.1, 0.2, addition, 1);

demoRounding(0.1, 0.2, multiplication, 2);

