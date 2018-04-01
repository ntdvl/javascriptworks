function addElement() {

	var x = document.createElement('li');
	var ulList = document.getElementById('list')
	x.className = 'test';
	x.textContent = window.prompt('İçerik ne olsun ?');
	ulList.appendChild(x);

}