var x = document.getElementsByTagName('p');

document.write('--------------' + '<br>');

for (var i = 0; i < x.length; i++) {
	document.write(x[i].textContent + '<br>');
}