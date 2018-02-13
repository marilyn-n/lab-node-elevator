class Elevator {
	constructor(){
		this.floor      = 0
		this.MAXFLOOR   = 10
		this.requests   = []
		this.direction  = 'up'
		this.startTimer = 0
		this.passengers = []
	}

	start() { this.startTimer = setInterval(this.update(), 1000)
	}
  
	stop() { setTimeout(this.startTimer)
	}
  
	update() { this.log()
	}

	_passengersEnter() { }
	
	_passengersLeave() { }

	floorUp() { 
		if (this.floor <= 9 ) {
			this.floor++
		}
	}
  
	floorDown() { 
		if (this.floor > 1 ) {
			this.floor--
		}
	}
  
	call(person) { 
		this.requests.push(person)
		console.log(this.requests)
	}

	log() { console.log(`Direction: ${this.direction} | Floor: ${this.floor} `)
	}

}

module.exports = Elevator

//=================== Iteration 1

// console.log(e1);
// console.log(e1.update());
// console.log(e1.floorUp());
// console.log(e1);
// Elevator.stop();
