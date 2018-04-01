var x = document.querySelector('button');

var y = document.querySelector('#result');

x.addEventListener('mouseover', test, false);
x.addEventListener('mouseout', test2, false);
x.addEventListener('click', test3, false);


function test3() {

	y.innerHTML = 'Click';

}


function test2() {

	y.innerHTML = 'Mouseout';

}

function test() {

	y.innerHTML = 'Mouseover';

}