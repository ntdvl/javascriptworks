var msg;
var level = 2;

switch(level) {

	case 1:
		msg = 'Ok';
	break;

	case 2:
		msg = 'Okk';
	break;

	case 3:
		msg = 'Okkk';
	break;

	default:
		msg = 'Okkkkk';
	break;

}

var el = document.querySelector('#result');
el.textContent = msg;