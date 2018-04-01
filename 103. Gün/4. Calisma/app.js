var x = document.getElementById('test');

x.addEventListener('mousemove', test, false);

x.addEventListener('click', test2, false);

x.addEventListener('dblclick', test3, false);

x.addEventListener('mouseover', test4, false);

x.addEventListener('mouseout', test5, false);

x.addEventListener('mouseup', test6, false);

x.addEventListener('mousedown', test7, false);

function test() {

	console.log('Mouse move');

}

function test2() {

	console.log('Clicked');

}

function test3() {

	console.log('Double click');

}

function test4() {

	console.log('Mouse over');

}

function test5() {

	console.log('Mouse out');

}

function test6() {

	console.log('Mouse up');

}

function test7() {

	console.log('Mouse down');

}