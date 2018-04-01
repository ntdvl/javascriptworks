function checkUserName() {

	var x = document.getElementById('test').value;
	var result = document.getElementById('result');

	if (x.length < 5) {

		result.textContent = 'En az 5 karakter girmelisiniz';

	} else {

		result.textContent = 'ok';

	}

}