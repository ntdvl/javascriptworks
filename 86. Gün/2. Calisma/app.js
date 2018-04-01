function ekle() {

	var pList = document.getElementsByTagName('p');

	for (var i = 0; i < pList.length; i++) {
		var attr = document.createAttribute('id');
		attr.value = 'text-align';
		pList[i].setAttributeNode(attr);
	}

}