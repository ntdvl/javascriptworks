var x = document.getElementById('test');

x.addEventListener('click', test2, false);

function test2(e) {

	e.preventDefault();
	console.log(event.type + event.target);


}