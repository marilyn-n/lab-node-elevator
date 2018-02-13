
const Elevator = require('./elevator.js');
const Person = require('./person.js');


let myElevator = new Elevator();
let person1 = new Person ('Marilyn', 2, 6);
let person2 = new Person('Rafael', 1, 9);
myElevator.start();
myElevator.call(person1);
myElevator.call(person2);

