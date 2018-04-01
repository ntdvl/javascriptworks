var totalGain = 3000;
var staff = 4;

var msg = document.querySelector('#result');

if ((totalGain / staff) >= 601) {

	msg.textContent = 'Ok';

} else {

	msg.textContent = 'No';

}