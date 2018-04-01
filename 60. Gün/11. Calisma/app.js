function slice(metin, baslangic, bitis) {

	bitis = (bitis == undefined) ? metin.length : bitis;

	if ((baslangic > bitis) || (baslangic > metin.length - 1) || (bitis > metin.length)) {

		return -1;

	}

	var str = '';
	for (var i = baslangic; i < bitis; i++) {
		str += metin[i];
	}
	return str;
}

console.log(slice('testtestetsss', 1, 6));