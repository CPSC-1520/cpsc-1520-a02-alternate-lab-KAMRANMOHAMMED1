const describe = function(variable) {
    console.log("The value is: \n", variable);
    let className = variable.constructor.name;
  console.log(`The variable is of type ${typeof variable} and is based on the ${className} prototype. \n`);
};
  
  
  let someVariable; // we'll be re-assigning different values to this

  someVariable = 'Any Text';
describe(someVariable);

someVariable = 42;
describe(someVariable);

someVariable = true;
describe(someVariable);

someVariable = {}; // An empty object literal
describe(someVariable);

someVariable = describe; // This is getting very Meta...
describe(someVariable);

someVariable = console.log;
describe(someVariable);

someVariable = new Date('March 5, 2024');
describe(someVariable);

const Car = function(vin, color, odometer) {
    this.vin = vin;
    this.color = color;
    this.odometerReading = odometer;

    this.drive = function(distance) {
        this.odometerReading += distance;
    }
}

let myFirstCar = new Car('WAUWFAFL9CA035531', 'green', 42);
//                        \_/\___/|||\____/
//                         |   |  |||  |- Serial Number
//                         |   |  |||- Plant
//                         |   |  ||- Model Year
//                         |   |  |- Check Digit
//                         |   |- Vehicle Descriptor Section (VDS)
//                         |- World Manufacturer Identifier (WMI)
describe(myFirstCar);


myFirstCar.drive(75293);
console.log(`I sold my first car when it hit ${myFirstCar.odometerReading} km.`);
let myDreamCar = new Car('4USCH7333WDWC2JH3', 'silver', 1000);
console.log(`I bought my dream car with ${myDreamCar.odometerReading} kliks.`);