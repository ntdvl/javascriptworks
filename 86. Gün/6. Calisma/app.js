function test(event) {

	var x = event.clientX;
	var y = event.clientY;

	event.target.innerHTML = 'Client X : ' + x + ' Client Y : ' + y;

}