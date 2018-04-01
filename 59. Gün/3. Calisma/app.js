function indexOf(metin, aranan, konum) {

	var sonKonum = metin.length - aranan.length;

	if (konum > sonKonum) {

		return -1;

	}

	var ilkKonum = (konum == undefined) ? 0 : konum;
	var geciciMetin;

	for (var i = ilkKonum; i <= sonKonum; i++) {
		geciciMetin = '';

		for (var j = i; j < (i+aranan.length); i++) {
			geciciMetin += metin[j];
		}

		if (aranan == geciciMetin) {

			return i;

		}
	}

	return - 1;

}

indexOf('test', 'te', 0);