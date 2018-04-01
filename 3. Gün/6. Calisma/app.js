var previousTotal = 8000;

var presentTotal = prompt('Bu ayki kârınız ne kadar ?');
var presentEmployer = prompt('Çalışan sayınız ne kadar')

if (presentTotal > previousTotal && presentTotal < 5) {
	console.log('Ok');
} else {
	console.log('No');
}

/* 
Bu örnekte && (ve) operatörünü kullandık. && operatöründe her iki şart da sağlanmalıdır.
Yoksa false döner.
Bu örneğin tam tersi de || (veya) operatörüdür. True dönmesi için şarttan biri true olmalıdır.
*/