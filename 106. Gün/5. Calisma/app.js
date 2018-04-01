var ulList = document.getElementById('list');

var aLink = document.querySelector('a');

var counter = document.getElementById('counter');

function addItem(event) {

	event.preventDefault();
	var li = document.createElement('li');
	var text = document.createTextNode('Test İçerik');
	li.appendChild(text);
	ulList.appendChild(li);

}

function update() {

	var list = ulList.getElementsByTagName('li').length;
	counter.innerHTML = list;
	console.log('A node has been inserted the DOM');

}

aLink.addEventListener('click', addItem, false);
ulList.addEventListener('DOMNodeInserted', update, false);