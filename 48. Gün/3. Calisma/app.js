function add() {

	var x = document.getElementById('first').value;

	var y = document.getElementById('second').value;

	if (x && y != '') {

		console.log(x + y);

	} else {

		console.log('olmadı');

	}

}

// hatalı yaptım