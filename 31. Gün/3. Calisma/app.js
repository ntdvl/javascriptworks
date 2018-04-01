function run() {
	var x = document.getElementById('test');

	x.valid = 'Başarılı!';

	if (x.checkValidity() == false) {
		window.alert(x.validationMessage);
	} else {
		window.alert(x.valid);
	}
}