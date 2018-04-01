var x = document.querySelector('p');

x.setAttribute('id', 'test');

function rAttr() {

	var x = document.querySelector('#test');

	x.removeAttribute('id');

}