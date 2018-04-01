function init() {

	var x = document.getElementById('test');

	var y = document.getElementById('result');

	var z = document.getElementById('mini-result');

	if (x.value !=  '') {

		y.innerHTML = x.value.length + ' TL';

	} else {

		z.innerHTML = 'Please enter a name below';

	}

}