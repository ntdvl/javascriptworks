function Hotel(name, capacity, reserved) {

	this.name = name;
	this.capacity = capacity;
	this.reserved = reserved;
	this.checkAvailability = function() {

		return this.capacity - this.reserved;

	};

}

var testHotel = new Hotel('Test Hotel', 45, 15);

var x = document.querySelector('#result');

x.textContent = testHotel.name + testHotel.capacity;