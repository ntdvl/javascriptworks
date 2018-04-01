/* 
Math, özellik ve metodlara sahip matematiksel işlemleri yapmak için
kullanılan bir yerleşik nesnedir. Bir fonksiyon nesnesi değildir.
*/

// function getRandom() {
// 	console.log(Math.floor(Math.random() * 5 )) + 1;
// }

/* 
Yukarıdaki örnekte Math nesnesininin random metodunu kullanarak ve sıradanlığın dışına çıkarak 
belli değerler arasında rastgele sayı üretilmesini ve bu sayıların aşağı doğru yuvarlanarak console'a yazılmasını söyledik.
*/


function getRandom() {
	console.log(Math.min([-50], [-51], [51], [500]));
}

/* 
Yukarıdaki örnekte Math nesnesinin min metodunu kullanarak iki veya daha fazla sayı arasında en küçük olanını bulduk.
*/ 

getRandom();