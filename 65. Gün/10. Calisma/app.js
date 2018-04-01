function color() {

	var x = document.getElementsByTagName('p');

	for (var i = 0; i < x.length; i++) {
		x[i].style.color = 'red';
		x[i].style.textTransform = 'uppercase';
	}

}