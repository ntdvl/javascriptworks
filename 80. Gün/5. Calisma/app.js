var x = document.createElement('li');

x.textContent = '0';

var y = document.getElementById('child-li');

var parentDiv = y.parentNode;

parentDiv.insertBefore(x, y);