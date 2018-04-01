var dizi1 = new Array(10);

for (var i = 0; i < dizi1.length; i++) {
	dizi1[i] = Math.floor(Math.random() * 100);

}

function sb(element, index, array) {

	if (element % 2 === 0) {

		console.log('Çift');

	} else {

		console.log('Tek');

	}

}

console.log(dizi1);
dizi1.forEach(sb);