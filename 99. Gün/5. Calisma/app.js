var input = document.getElementById('test');
var result = document.getElementById('result');

function checkUserName(minLength) {

	if (input.value.length < minLength) {

		result.textContent = 'Username must be ' + minLength;

	} else {

		result.innerHTML = '';

	}

}

input.addEventListener('blur', function() {
	checkUserName(9);
}, false);