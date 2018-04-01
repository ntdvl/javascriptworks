var i = 0;
var msg = '';

while( i < 10) {

	msg += i + ' x  5 = ' + (i*5) + '<br>';
	i++;

}

document.querySelector('#result').innerHTML = msg;