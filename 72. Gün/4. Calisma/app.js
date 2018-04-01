var x = document.querySelector('#testLink');

x.textContent = 'Test';

var y = document.createAttribute('target');

var z = document.createAttribute('href');

y.nodeValue = '_blank';

z.nodeValue = 'https://www.google.com';

x.setAttributeNode(y);
x.setAttributeNode(z);