var x = document.getElementById('result');

x.addEventListener('keypress', test, false);

function test(event) {

	console.log('event.type : ' + event.type + ' event.key : ' + event.key + ' event.keyCode : ' + event.keyCode);

}