var x = document.getElementById('test');

var y = document.createAttribute('style');

y.nodeValue = 'list-style-type: none';

x.setAttributeNode(y);