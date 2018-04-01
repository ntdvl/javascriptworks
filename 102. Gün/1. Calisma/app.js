var x = document.getElementById('test');

function test() {

	console.log('Ok');

}

x.addEventListener('load', test(), false);