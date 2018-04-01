function check() {

	var str = document.getElementById('test').value;

	var reg = /^[A-Za-z]/;

	if (str) {
		
		if(reg.test(str)) {
			alert('Tamamdır');
		} else {
			alert('Olmadı');
		}

	} else {
		alert('Boş bırakma');
	}
}

/*Bir input alanı oluşturduk ve düzenli ifade kalıbı tanımladık.
Daha sonra da bunu bir fonksiyon yardımıyla kontrol ettik.*/