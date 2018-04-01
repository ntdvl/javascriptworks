function calistir() {
	var test = window.prompt('How old are you ?');
	if (isNaN(test)) {
		window.alert('Please, enter your age.');
		return false;
	} else {
		if (test < 18) {
			window.alert('No entry.');
		} else {
			window.alert("You've entered.");
		}
	}
}