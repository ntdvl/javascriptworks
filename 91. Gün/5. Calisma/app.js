var x = prompt('En sevdiğiniz yemek');
var msg;

switch(x) {

	case 'kuru':
		msg = 'fasülye';
	break;

	case 'döner':
		msg = 'pilav üstü';
	break;

	default:
		msg = 'Her yemek güzeldir';
	break;

}

var el = document.querySelector('#result');
el.textContent = msg;