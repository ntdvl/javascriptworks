var first = document.getElementById('test');
var second = document.getElementById('karakter');

var charLimit = 180;

first.onkeyup = function () {

	second.innerHTML = charLimit - this.value.length;

	if (second.innerHTML < 0) {

		second.style.color = 'red';

	}


}