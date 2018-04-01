var restaurant = {

	name: 'Lokanta',
	meat: 240,
	discount: 18,
	offerPrice: function() {

		var result = Math.floor(this.meat * ((100 - this.discount) / 100));
		return result;

	},
}

var x = document.querySelector('#name');

x.innerHTML = restaurant['name'];

var y = document.querySelector('#price');

y.style.textDecoration = 'line-through';

y.innerHTML = restaurant['meat'].toFixed(2);

var z = document.querySelector('#offer');

z.innerHTML = restaurant.offerPrice();