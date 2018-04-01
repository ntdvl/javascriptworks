var msg;
var age = 18;

switch(age) {

	case 15:
		msg = 'No';
	break;

	case 18:
		msg = 'Ok';
	break;

	case 21:
		msg = 'Too';
	break;

	default:
		msg = 'Maybe';
	break;

}

var test = document.querySelector('#result');
test.textContent = msg;