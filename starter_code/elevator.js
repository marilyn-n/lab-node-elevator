class Elevator {
	constructor(){
		this.floor      = 0;
		this.MAXFLOOR   = 10;
		this.requests   = [];
		this.direction  = 'up';
		this.startTimer = 0;
		this.waitingList = [];
		this.passengers = [];
	}

	start() { 
		this.startTimer = setInterval(this.update.bind(this), 1000);
	}
  
	stop() { 
		clearInterval(this.startTimer);
	}
  
	update() { 
		if (this.requests.includes(this.floor)) {
			this._passengersLeave()
			this._passengersEnter()
		} 
		this.log()
		this.direction  == 'up' ? this.floorUp() : this.floorDown()
	
	}

	_passengersEnter() {
		if (this.requests) {
			
		}
	 }

	_passengersLeave() { }

	floorUp() { 
		if (this.floor < this.MAXFLOOR ) {
			this.floor++
		} else {
			this.direction = 'down'
		}
	}
  
	floorDown() { 
		if (this.floor > 1 ) {
			this.floor--
		} else {
			this.direction = 'up'
		} 
	}
  
	call(person) { 
		this.waitingList.push(person)
		this.requests.push(person.originFloor)
		
	}

	log() { console.log(`Direction: ${this.direction} | Floor: ${this.floor} `)
	}

}

module.exports = Elevator

