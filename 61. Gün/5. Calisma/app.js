function check() {

	var x = document.getElementById('isim');
	var y = document.getElementById('email');

	y.valid = 'Ok';
	y.validationMessage = 'Olmadı';

	if (x.checkValidity() == true && y.checkValidity() == true) {

		window.alert(y.valid);

	} else {
		
		window.alert(y.validationMessage);

	}

}