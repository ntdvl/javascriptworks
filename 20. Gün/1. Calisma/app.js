/*var myObject = {
	tur: 'insan',
	kromozonSayisi: 46,
	yurume: true,
}*/

/* 
Objemizi yukarıdaki gibi oluşturduk.
Objemiz içerisindeki özelliklere erişmek için objeismi.ozellikadi veya objeismi['ozellikadi'] yöntemlerini kullanabiliriz.
*/


var myObject = {
	marka: 'Peugeot',
	model: '3008',
	tip: 'Arazi',
	silindir: 16,
	yazdir: function () {
		console.log(this.marka + this.model);
	}
}

// console.log(typeof(myObject['silindir']));
myObject.yazdir();
