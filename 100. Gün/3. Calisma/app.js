function checkLength(e, minLength) {

	var input, result;
	if (!e) {

		e = window.event;

	}

	input = e.target || e.srcElement;
	result = entry.nextSibling;

	if (input.value.length < minLength) {

		result.textContent = 'Username must be ' + minLength + ' characters or more';

	} else {

		result.textContent = 'ok';

	}

}

var entry = document.getElementById('test');

if (entry.addEventListener) {

	entry.addEventListener('blur', function(e) {

		checkLength(e, 5);

	}, false);

} else {

	entry.attachEvent('onblur', function(e) {
		checkLength(e, 5);
	});

}