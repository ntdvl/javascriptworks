var form = document.getElementById('testForm');

var input1 = document.getElementById('name');
var input2 = document.getElementById('pass');


var result = document.getElementById('result');


function test(e) {

	if ((input1.value && input2.value) == '') {

		result.innerHTML = 'Olmadı';
		e.preventDefault();

	} else {

		result.innerHTML = 'Oldu';

	}

}

form.addEventListener('submit', test, false);