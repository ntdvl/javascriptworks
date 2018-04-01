var string = 'Bir berber bir berbere gel beraber bir berber dükkanı açalım demiş.';

var reg = /bi/gi;

console.log(reg.test(string));
console.log('lastIndex ' + reg.lastIndex);

while (reg.test(string)) {
	console.log(reg.lastIndex);
}