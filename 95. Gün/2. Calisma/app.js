var ulList = document.getElementsByTagName('ul')[0];

var startItem = ulList.firstChild;
var lastItem = ulList.lastChild;

startItem.className = 'ok';
lastItem.className = 'ok';

console.log(startItem);
console.log(lastItem);