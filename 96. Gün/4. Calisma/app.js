var x = document.getElementById('test');

var y = x.textContent;
var z = x.innerText;

var msg = '<p>textContent: ' + y + '</p>';
	msg += '<p>innerText: ' + z + '</p>';


var result = document.getElementById('result');
result.innerHTML = msg;

// x.textContent = 'ok';