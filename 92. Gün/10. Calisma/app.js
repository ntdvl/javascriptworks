var table = window.prompt("Enter a number");
var operator = window.prompt('a');
var tableValue = parseInt(table);
var i = 0;
var msg = '';

if (operator == 'addition') {

	while(i <= 10) {

		msg += i + ' + ' + tableValue + ' = ' + (i + tableValue) + '<br>';
		i++;

	}

} else if (operator == 'multiply') {

	while(i <= 10) {

		msg += i + ' * ' + tableValue + ' = ' + (i * tableValue) + '<br>';
		i++;

	}


} else if (operator == 'division') {

	while (i <= 10) {

		msg += i + ' / ' + tableValue + ' = ' + (i / tableValue) + '<br>';
		i++;

	}

} else {

	msg += 'Nothing';

}

document.querySelector('#result').innerHTML = msg;