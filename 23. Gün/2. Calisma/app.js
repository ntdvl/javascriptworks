var test = prompt('Hangi meyveyi seversin ?');

function yazdir($par) {
	window.alert($par);
}

switch(test) {
	case 'elma':
	yazdir('elma tatlı bir meyvedir');
	break;

	case 'armut':
	yazdir('armut tatlı bir meyvedir');
	break;

	case 'kiraz':
	yazdir('kiraz tatlı bir meyvedir');
	break;

	default:
	yazdir('mirr');
	break;
}