var pList = document.querySelector('p').classList;

console.log('pList.length');
console.log(pList.length);
console.log('---------');
console.log('Class List');
for (var i = 0; i < pList.length; i++) {
	console.log(pList[i]);
}

console.log(pList.contains('tests'));
pList.add('ceee');
console.log(pList.length);
pList.remove('test');
console.log(pList.length);
pList.toggle('test');
console.log(pList.length);