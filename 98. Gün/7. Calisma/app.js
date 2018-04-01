var list = document.getElementsByTagName('ul')[0];

var newItemLast = document.createElement('li');
var newItemLastText = document.createTextNode('7');

newItemLast.appendChild(newItemLastText);

list.appendChild(newItemLast);

var newItemFirst = document.createElement('li');
var newItemFirstText = document.createTextNode('0');

newItemFirst.appendChild(newItemFirstText);

list.insertBefore(newItemFirst, list.firstChild);

var listItem = document.querySelectorAll('li');

for (var i = 0; i < listItem.length; i++) {
	listItem[i].className = 'ok';
}

var result = document.getElementById('number');

result.textContent = listItem.length;