var date = new Date();
var d = date.getDay();

switch(d) {
	case 0:
		console.log('Its Sunday');
		break;

	case 1: 
		console.log('Its Monday');
		break;

	case 2:
		console.log('Bugün Salı');
		break;

	case 3:
		console.log('Its Wednesday');
		break;

	case 4:
		console.log('Its Thursday')
		break;

	case 5:
		console.log('Its Friday');
		break;

	case 6:
		console.log('Its Saturday');
		break;

	default:
		console.log('Mırrr');
		break;
}