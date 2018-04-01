function check() {

	var x = document.getElementById('test').value;

	var regex = /[A-Za-z]/;

	if (x !== '') {

		if (regex.exec(x)) {

			console.log('Ok');

		} else {
			console.log('No');
		}

	} else {
		console.log('Provide them');
	}

}