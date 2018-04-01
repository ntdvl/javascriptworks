function gonder() {

	var x = document.getElementById('fname').value;

	var y = document.getElementById('lname').value;

	var regex = /[a-zA-Z]/gi;

	if ( x && y !== '') {

		if (!regex.test(x, y)) {

			console.log('No');

		} else {

			console.log('Ok');

		}

	} else {

		console.log('Provide them');

	}

}