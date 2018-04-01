function check() {

	var a = document.getElementById('isim');

	var b = document.getElementById('sisim');


	if ((a.checkValidity()) && (b.checkValidity()) == false) {

		window.alert(a.validationMessage);

	} else {

		window.alert(a.validationMessage);

	}

}