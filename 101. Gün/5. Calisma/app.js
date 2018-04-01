function checkUserName() {

	var result = document.getElementById('result');

	if (this.value.length < 2) {

		result.textContent = 'No';

	} else {

		result.textContent = 'Yes';

	}

}

var x = document.getElementById('test');

x.addEventListener('keypress', checkUserName, false);