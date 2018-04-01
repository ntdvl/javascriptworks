var x = document.getElementById('test');

var attr = document.createAttribute('style');

attr.nodeValue = 'display: none';

x.setAttributeNode(attr);