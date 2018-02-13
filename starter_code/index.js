
const Elevator = require('./elevator.js');
const Person = require('./person.js');


let myElevator = new Elevator();
let marilyn = new Person ('Marilyn', 2,5);
myElevator.call(marilyn);
myElevator.update();
