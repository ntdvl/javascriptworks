var ust = function (say, kuvvet) {

	var sonuc = 1;

	for (var i = 0; i < kuvvet; i++) {
		sonuc = sonuc * say;
	}
	return sonuc;

}


console.log(ust(2,6));
