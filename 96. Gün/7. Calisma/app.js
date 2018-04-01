var newElement = document.createElement('li');

var newElementText = document.createTextNode('6');

newElement.appendChild(newElementText);

var ulList = document.getElementsByTagName('ul')[0];

ulList.appendChild(newElement);