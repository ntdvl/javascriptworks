var first = new Date();
var now = first.getDay();


switch(now) {
	case 0:
	window.alert('Today is Monday');
	break;

	case 1:
	window.alert('Today is Sunday');
	break;

	case 2:
	window.alert('Today is Tuesday');
	break;

	case 3:
	window.alert('Today is Wednesday');
	break;

	case 4:
	window.alert('Today is Thursday');
	break;

	case 5:
	window.alert('Today is Friday');
	break;

	case 6:
	window.alert('Today is Saturday');
	break;

	default:
	window.alert('Mirrr');
	break;
}