function checkUserName(x, minLength) {

	var result = document.getElementById('result');

	if (x.value.length < minLength) {

		result.innerHTML = 'No';

	} else {

		result.innerHTML = 'Yes';

	}

}

var x = document.getElementById('test');
x.addEventListener('blur', function() {
	checkUserName(x, 5);
}, false);