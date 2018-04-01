var el = prompt('Yeni başlık metnini giriniz.');

function changeTitle($el) {
	document.title = $el;
}

changeTitle(el);


/* 
Yukarıdaki örnekte kullanıcıdan alınan veri sonrası document nesnesinin title özelliğini değiştirdik.
*/