var li1 = document.getElementById('test1');
var li2 = document.getElementById('test2');
var li3 = document.getElementById('test3');
var li4 = document.getElementById('test4');
var li5 = document.getElementById('test5');
var li6 = document.getElementById('test6');

function test(event) {

	li1.textContent = event.screenX;
	li2.textContent = event.screenY;
	li3.textContent = event.pageX;
	li4.textContent = event.pageY;
	li5.textContent = event.clientX;
	li6.textContent = event.clientY;

}

var x = document.getElementById('test');

x.addEventListener('mousemove', test, false);