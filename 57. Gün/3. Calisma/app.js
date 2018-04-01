function check() {

	var x = document.getElementById('username').value;

	if (x != '') {

		window.alert('Oldu');
		return true;

	} else {

		window.alert('Olmadı');
		return false;

	}

}