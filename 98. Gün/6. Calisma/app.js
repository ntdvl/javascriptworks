var single = document.getElementById('test');

var parent = single.parentNode;

var firstItem = document.createElement('li');

var firstItemContent = document.createTextNode('6');

firstItem.appendChild(firstItemContent);

var x = parent.appendChild(firstItem);

var y = document.querySelectorAll('ul > li');

for (var i = 0; i < y.length; i++) {
	y[i].className = 'ok';
}

var result = document.getElementById('number');
result.textContent = y.length;