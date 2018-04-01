var myString = 'Hello-World-How-are- you doing?';
var splits = myString.split('-', 4);


for (var i = 0; i < splits.length; i++) {
	console.log(splits[i]);
}

console.log(splits);
