var say = prompt('Sayı giriniz');
for (var i = 2; i < say; i++) {
	if (say % i == 0) {
		console.log('Sayı asal değil');
	} else {
		console.log('Sayı asal');
	}
}