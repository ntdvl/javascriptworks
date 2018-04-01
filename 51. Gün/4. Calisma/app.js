var dizi1 = new Array(15);

var min, max;

for (var i = 0; i < dizi1.length; i++) {
	dizi1[i] = Math.floor(Math.random() * 100);
}


var min = dizi1[0]
var max = dizi1[0]

for (var z = 0; z < dizi1.length; z++) {
	
	if (dizi1[z] > max) {

		max = dizi1[z];

	} 

	if (dizi1[z] < min) {

		min = dizi1[z];

	} 

}


console.log(dizi1);
console.log('En küçük eleman :' + min);
console.log('En büyük eleman :' + max);