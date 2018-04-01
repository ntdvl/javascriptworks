var oDay = new Date();
var now = oDay.getHours();
var greeting;

if (now > 18) {
	greeting = 'Good Evening';
} else if (now > 12) {

	greeting = 'Good Afternoon';

} else if (now > 0) {

	greeting = 'Good Morning';

} else {

	greeting = 'Welcome';

}
document.write(greeting);