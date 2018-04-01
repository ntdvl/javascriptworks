var dizi = new Array(10);

for (var i = 0; i < dizi.length; i++) {
	dizi[i] = Math.floor(Math.random() * 10);
}

console.log(dizi);

var max = Math.max(...dizi);
var min = Math.min(...dizi);

console.log(max);
console.log(min);