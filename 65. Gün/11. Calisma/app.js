var x = document.getElementsByClassName('test');

function color() {
	
	for (var i = 0; i < x.length; i++) {
		x[i].style.color = 'red';
	}

}

function rm() {

	for (var i = 0; i < x.length; i++) {
		x[i].removeAttribute('style');
	}

}