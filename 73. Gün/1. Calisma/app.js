var x = document.getElementById('test');

var attr = x.attributes;

console.log(attr);

console.log(attr.length);

console.log(attr[0]);

console.log(attr[1]);

console.log(attr.getNamedItem('style'));

console.log(attr.removeNamedItem('id'));

console.log(attr.length);