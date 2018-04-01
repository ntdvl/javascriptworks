function run() {
	var x = document.getElementById('text');
	var y = document.getElementById('pass');

	x.customError = 'Mırrr';
	y.customError = 'Mırrr2222';
	x.setCustomValidity = 'Beşiktaş'

	if (x.checkValidity() == false && y.checkValidity() == false) {
		window.alert(x.customError);
	} else {
		window.alert(x.setCustomValidity);
	}

}