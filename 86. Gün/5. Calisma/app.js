function test(event) {

	var x = event.screenX;
	var y = event.screenY;

	event.target.innerHTML = 'x : ' + x + ' y : ' + y;

}