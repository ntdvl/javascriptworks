var input = document.getElementById('test');

input.addEventListener('cut', test2, false);
input.addEventListener('copy', test3, false);
input.addEventListener('paste', test4, false);
input.addEventListener('select', test5, false);

function test2() {

	console.log('Cutted');

}

function test3() {

	console.log('Copied');

}

function test4() {

	console.log('Pasted');

}

function test5() {

	console.log('Selected');

}