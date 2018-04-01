var str = 'abcddcba';

for (var i = 0; i < str.length; i++) {
	// console.log(str[i] + ' => ' + str.indexOf(str[i]));
	console.log(str[i] + ' => ' + str.lastIndexOf(str[i]));
}