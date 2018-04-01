var myCar = {

	name: 'Audi',
	speed: 250,
	ABS: true,

	checkABS: function() {

		return true;

	},
	test: {
		name: 'deneme',
	},

}

console.log(myCar.test['name']);