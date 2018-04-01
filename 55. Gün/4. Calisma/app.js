var x = y = toplam = 0;

var dizi = new Array(5);

while (x < dizi.length) {

	dizi[x] = Math.floor(Math.random() * 10);
	x++;

}

while ( y < dizi.length ) {

	toplam += dizi[y];
	y++;

}



console.log(dizi);
console.log(toplam);