var human = {
	name: 'John',
	surname: 'Connor',
	length: 1.75,
	health: true,
	education: 'Master',
	sayhello: function() {
		window.alert('Hi ' + this.surname + ',' + ' Welcome to the board');
	}
}

human.sayhello();