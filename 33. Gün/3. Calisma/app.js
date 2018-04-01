var x = document.getElementById('test');

x.onmouseover = function() {
	this.style.color= 'red';
}

x.onmouseout = function() {
	this.style.fontSize= '25px',
	this.style.background= 'blue';
}