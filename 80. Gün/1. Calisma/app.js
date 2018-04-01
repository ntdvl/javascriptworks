var x = document.querySelector('#test');

var y = document.createElement('li');

var z = document.createElement('span');

z.textContent = '6';

y.appendChild(z);

x.appendChild(y);