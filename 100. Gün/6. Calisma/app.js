function checkLength(e, minLength) {

	var input, result;

	if (!e) {

		e = window.event;

	}
	input = e.target || e.srcElement;
	result = input.nextSibling;

	if (input.value.length < minLength) {

		result.textContent = 'Username must be ' + minLength + ' characters or more';

	} else {

		result.textContent = 'ok';

	}

}

var test = document.getElementById('test');

if (test.addEventListener) {

	test.addEventListener('blur', function(e) {
		checkLength(e, 6);
	}, false);

} else {

	test.attachEvent('onblur', function(e) {
		checkLength(e, 6);
	}, false);

}