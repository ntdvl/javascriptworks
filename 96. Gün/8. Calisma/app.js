var newElement = document.createElement('p');

var newElementText = document.createTextNode('ok');

newElement.appendChild(newElementText);

var x = document.getElementsByClassName('container')[0];

x.appendChild(newElement);