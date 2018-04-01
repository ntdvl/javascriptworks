var dizi = new Array(10);

var total = 0;
var total2 = 0;

for (var i = 0; i < dizi.length; i++) {
	dizi[i] = Math.floor(Math.random() * 10);
}

for (var q = 0; q < dizi.length; q++) {
	total += dizi[q];
}

for (var z = 0; z < dizi.length; z += 2) {
	total2 += dizi[z]
}

console.log(dizi);
console.log('Dizi içerisindeki elemanların toplamı => ' + total);
console.log('Dizi içerisindeki çift indise sahip elemanların toplamı => ' + total2);