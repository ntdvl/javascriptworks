function generate() {

	var key = '';

	for (var i = 0; i < 11; i++) {
		key += String.fromCharCode(48 + 9 * Math.random());

		if (key[0] == 0) {
			return false;
		}
	}
	return key;

}

document.write(generate());