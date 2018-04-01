var x = document.getElementById('run');

x.addEventListener('click', click);
x.addEventListener('mouseover', over);
x.addEventListener('mouseout', out);

function click() {

	console.log('You clicked');

}

function over() {

	console.log('You overred');

}

function out() {

	console.log('You out');

}