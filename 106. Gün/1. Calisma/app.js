function add() {

	var ulList = document.getElementById('list');

	var li = document.createElement('li');

	li.textContent = 'Test İçerik';

	// var z = li.appendChild(text);

	var t = ulList.appendChild(li);

}

var x = document.getElementById('test');

x.addEventListener('click', add, false);

function check() {

	console.log('Oldu')

}
window.addEventListener('DOMNodeInserted', check, false);