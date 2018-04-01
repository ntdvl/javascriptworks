function ekle() {

	var el = document.createElement('p');
	el.className = 'todo-list';
	var text = document.createTextNode('test');
	document.body.appendChild(el);
	el.appendChild(text);

	

}