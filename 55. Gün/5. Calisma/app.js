var dizi = new Array(5);

var i = toplam = 0;

while ( i < dizi.length ) {
	
	dizi[i] = Math.floor(Math.random() * 10);
	toplam += dizi[i];
	i++;

}

console.log(dizi);
console.log(toplam);