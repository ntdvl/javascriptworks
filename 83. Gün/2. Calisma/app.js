var restaurant = new Object();

restaurant.name = 'Lokanta';
restaurant.capacity = 80;
restaurant.otopartk = true;
restaurant.reserved = 25;
restaurant.text;
restaurant.checkAvailability = function() {

	return this.capacity - this.reserved;

}


restaurant.text = 'Test';
console.log(restaurant.checkAvailability());
console.log(restaurant.otopartk);
console.log(restaurant.name);
delete restaurant.text;
console.log(restaurant.text);