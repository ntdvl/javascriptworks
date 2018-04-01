var restaurant = {

	name: 'Lokanta',
	food: ['Döner', 'Pide', 'Lahmacun', 'Sulu Yemek'],
	tables: 80,
	booked: 30,
	checkAvailability: function() {

		return this.tables - this.booked;

	},

}

var x = document.getElementById('name');

x.textContent = restaurant.checkAvailability();