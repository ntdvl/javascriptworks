var p = document.getElementById('test');

p.style.backgroundColor = 'yellow';

p.onmouseout = function() {

	this.removeAttribute('style');

}

p.onmouseover = function() {

	this.style.backgroundColor = 'red';

}