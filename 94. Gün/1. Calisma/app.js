var classList = document.getElementsByClassName('hot');

if (classList.length > 3) {

	var clas = classList[2];
	clas.className = 'ok';
	clas.textContent = 'sınıf ismi değiştirildi';

}