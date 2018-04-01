var car = {

	make: 'BMW',
	color: 'black',
	ABS: true,
	ESP: false,
	currentSpeed: 150,
	speed10Up: function() {

		return this.currentSpeed + 10;

	}

}

console.log(car.currentSpeed);
console.log(car.speed10Up());