class Elevator {
  constructor(){
    this.floor      = 0;
    this.MAXFLOOR   = 10;
    this.requests   = [];
    this.direction  = 'up';
    this.startTimer = 0;
  }

  start() {this.startTimer = setInterval(this.update(), 1000);
  }
  stop() {clearInverval( this.startTimer);
  }
  update() { this.log();
  }

  _passengersEnter() { }
  _passengersLeave() { }

  floorUp() {if (this.floor <= 9 ) {
    this.floor++;
  }
  }
  floorDown() { if (this.floor > 1 ) {
    this.floor--;
    }
  }
  call() {
  }

  log() { console.log(`Direction: ${this.direction} | Floor: ${this.floor} `);
  }

}

module.exports = Elevator;

//=================== Iteration 1
let e1 = new Elevator();

console.log(e1);
console.log(e1.update());
console.log(e1.floorUp());
console.log(e1);
Elevator.stop();
