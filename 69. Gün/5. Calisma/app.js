function addElement() {

	var x = document.createElement(window.prompt('Hangi elemanı oluşturmak istersiniz ?'));

	x.className = window.prompt('Hangı sınıf adı verilsin ?');

	x.textContent = window.prompt('İçeriği ne olsun ?');

	document.body.appendChild(x);

}