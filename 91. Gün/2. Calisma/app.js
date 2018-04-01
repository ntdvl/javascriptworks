var score = 75;
var msg = '';

function congratz() {

	msg += 'Congratulation';

}

if (score >= 74) {

	congratz();
	msg += 'Proceed to the next round';

}

var result = document.querySelector('#result');
result.textContent = msg;