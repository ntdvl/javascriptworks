document.write(decodeURI(document.location));

console.log(document.readyState);

var scripts = document.scripts;

for (var i = 0; i < scripts.length; i++) {
	console.log(scripts[i]);
}