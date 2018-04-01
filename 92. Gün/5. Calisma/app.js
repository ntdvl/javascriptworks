var array = ['HTML5', 'CSS3', 'Javascript'];
var arrayLength = array.length;
var round = 0;
var msg = '';

for (var i = 0; i < arrayLength; i++) {
	
	round = (i + 1);

	msg += 'Round : ' + round;
	msg += array[i];

}

document.querySelector('#result').textContent = msg;