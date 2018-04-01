function checkUserName() {

	var msg = document.getElementById('result');
	if (this.value.length < 10) {

		msg.textContent = 'No';

	} else {

		msg.textContent = 'Ok';

	}
}

var x = document.getElementById('test');
x.onblur = checkUserName;