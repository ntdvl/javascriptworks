var human = {

	age: 47,
	name: 'Test',
	has: 'Red Eye',
	property: function () {

		window.alert(this.has);

	}

}

// console.log(typeof human);
human.property();