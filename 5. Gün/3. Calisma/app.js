var say = prompt('Faktöriyeli alınacak sayıyı giriniz');
var faktoriyel = 1;
for (var i = 2; i <= say; i++) {
	faktoriyel *= i;
}
console.log(say + ' sayısının faktöriyeli ' + faktoriyel);