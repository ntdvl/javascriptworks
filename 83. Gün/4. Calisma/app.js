var hotel = new Object();

hotel.name = 'Load';
hotel.capacity = 78;
hotel.reserved = 28;
hotel.gym = true;
hotel.checkAvailability = function() {

	return this.capacity - this.reserved;

}

var x = document.getElementById('test');
x.textContent = hotel.checkAvailability();