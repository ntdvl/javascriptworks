function run() {


	var x = document.getElementById('formid');

	x.customError = 'Geçersiz input';
	x.validationMessage = 'Geçerli input';


	if (x.checkValidity() == false) {		
		window.alert(x.customError);
	}
	

}