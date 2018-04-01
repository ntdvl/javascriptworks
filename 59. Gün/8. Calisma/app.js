function customSlice(metin, baslangic, bitis) {

	bitis = (bitis == undefined) ? metin.length : bitis;

	if ((baslangic > metin.length - 1) || (baslangic > bitis) || (bitis > metin.length)) {

		return false;

	}

	var str = '';

	for (var i = baslangic; i < bitis; i++) {
		str += metin[i];
	}

	return str;

}

console.log(customSlice('test', 0, 4));