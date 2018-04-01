var totalGain = prompt('Bu ayki kazanç miktarınızı giriniz');
var employe = prompt('Çalışan sayısı ne kadar ?')


// if (totalGain < 2000) {
// 	console.log('No!'); 
// } else {
// 	console.log('Ok!');
// }

/*
Yukarıdaki if statements ile toplam kazancın 
2.000 değerinin altında olması durumunda ve diğer durumda ne yapması gerektiğini söyledik.
*/

if ((totalGain < 3000) && (employe < 10)) {
	console.log('Bu ayki kazanç çalışan sayısına göre oldukça düşük.');
} else {
	console.log('Bu ayki kazanç çalışan sayısına göre oldukça fazla');
}

/* 
Yukarıdaki if statement ile toplam kazanç ve çalışan sayısının belirli durumlarda belirli sonuçları döndürmesini sağladık.
*/