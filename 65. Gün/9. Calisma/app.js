function generate() {

	var x = document.getElementById('output');

	x.innerHTML = '#' + Math.round(100000 + Math.random() * 900000);

}