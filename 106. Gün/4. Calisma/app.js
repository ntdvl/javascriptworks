var ulList = document.getElementById('list');
var count = document.getElementById('counter');
var aLink = document.querySelector('a');

function addItem(event) {

	event.preventDefault;
	var newEl = document.createElement('li');
	var newText = document.createTextNode('Test li');
	newEl.appendChild(newText);
	ulList.appendChild(newEl);

}

function count() {

	var count = ulList.getElementsByTagName('li').length;
	count.innerHTML = count;

}

aLink.addEventListener('click', addItem, false);
ulList.addEventListener('DOMNodeInserted', count, false);