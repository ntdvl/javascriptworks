function run() {
	var x = document.getElementById('testinput');

	if (x.checkValidity() == false) {
		console.log('ceee');
	} else {
		console.log('Mırr');
	}
}