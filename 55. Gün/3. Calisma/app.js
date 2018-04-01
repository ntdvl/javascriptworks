var dizi = new Array(10);

for (var i = 0; i < dizi.length; i++) {
	dizi[i] = Math.floor(Math.random() * 10);
}

var x = toplam = 0;

while ( x < dizi.length) {

	toplam += dizi[x];
	x++;

}

console.log(dizi);
console.log(toplam);