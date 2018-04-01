function Close() {
	window.open('google.com');
	var durum = window.confirm('Sayfayı Kapatmak İstediğinizden Emin Misiniz ?');
	if (durum == true) {
		window.close(this.open());
	} else {
		window.alert('Sayfa Kapanmayacak');
	}
}

/* 
Olmadı
*/