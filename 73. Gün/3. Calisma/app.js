var x = document.querySelector('ul');

console.log(x.childElementCount);

var y = document.createElement('li');

y.textContent = 'lorem';

x.appendChild(y);

console.log(x.childElementCount);