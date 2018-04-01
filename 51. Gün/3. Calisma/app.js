var enKucuk = function (dizi) {

	if (dizi.length === 0){

		console.log('Dizi hiçbir elemana sahip olmadığı için çalıştırılmadı');

	}

	var min = dizi[0];
	var max = dizi[0];

	for (var i = 1; i < dizi.length; i++) {
		if (dizi[i] < min) {

			min = dizi[i];

		}

		if (dizi[i] > max) {

			max = dizi[i];

		}
	}

	console.log('Dizinin en küçük elemanı: ' + min);
	console.log('Dizinin en büyük elemanı: ' + max);


}

var dizi = [0, 3, 5, 6, 8, 10, 15, 1151, 11111, 1000000];

enKucuk(dizi);