function calistir() {


	for (var i = 0; i < 6; i++) {
		console.log( i + ' => ' + String.fromCharCode(48 + 9 * Math.random()));
	}

}

calistir();