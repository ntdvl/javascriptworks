var spa = document.getElementById('spa');

var attr = spa.attributes;

var attribute = document.createAttribute('style');

attribute.nodeValue = 'text-transform: uppercase';

attr.setNamedItem(attribute);