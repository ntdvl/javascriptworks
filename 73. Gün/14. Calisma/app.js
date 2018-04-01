var divList = document.querySelector('div');
var cssDec = divList.style;

console.log(cssDec.length);

var attr = document.createAttribute('style');

attr.nodeValue = 'display: block; text-transform: uppercase;';

divList.setAttributeNode(attr);

console.log(cssDec.length);

console.log('---------');
console.log(cssDec.cssText);

console.log(cssDec[1]);

console.log('---------');
console.log(cssDec.getPropertyValue('text-transform'));

console.log('---------');
console.log(cssDec.removeProperty('text-transform'));

console.log(cssDec.length + '</br>' +  cssDec.cssText);

cssDec.setProperty('color', 'red');

console.log(cssDec.length);

console.log(cssDec.cssText);