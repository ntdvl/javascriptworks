function validateForm() {
	var el = document.forms['ornekform']['test'].value;
	if (el == '') {
		window.alert('Test');
		return false;
	}
}