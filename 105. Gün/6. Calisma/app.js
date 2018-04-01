var x = document.getElementById('testForm');

var input = document.getElementById('name');

var input2 = document.getElementById('pass');

function test(event) {

	if ((input.value == '') && (input2.value == '')) {

		console.log('Olmadı');		
		event.preventDefault();

	} else {

		console.log('Oldu');

	}
}

x.addEventListener('submit', test, false);