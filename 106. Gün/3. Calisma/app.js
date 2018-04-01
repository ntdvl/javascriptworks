var list = document.getElementById('list');

var deleteButton = document.getElementById('delete');
var addButton = document.getElementById('add');

function add() {

	var li = document.createElement('li');

	li.textContent = 'Test İçerik';

	list.appendChild(li);

}

function del() {

	if (list.childElementCount > 0) {

		var last = list.lastElementChild;

		list.removeChild(last);

	} else {

		console.log('There is no more li element');

	}

}

function test() {

	console.log('A node has been inserted the DOM');

}

function test2() {

	console.log('A node has been removed from the DOM');

}

function test3() {

	console.log('x2');

}

deleteButton.addEventListener('click', del, false);
addButton.addEventListener('click', add, false);

list.addEventListener('DOMNodeRemoved', test2, false);
list.addEventListener('DOMNodeInserted', test, false);
list.addEventListener('DOMSubtreeModified', test3, false);