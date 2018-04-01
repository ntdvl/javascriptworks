function ekle() {

	var text = document.getElementById('textarea').value;

	var parent = document.getElementById('parent');

	if (text != '') {

		var newStory = document.createElement('p');
		newStory.textContent = text;

		parent.appendChild(newStory);

	} else {

		window.alert('Boş bırakmayın');

	}
}

function sil() {

	var pList = document.getElementsByTagName('p');

	var parent = document.getElementById('parent');


	if (pList.length > 0) {

		var pLast = pList[pList.length - 1];
		parent.removeChild(pLast);

	} else {

		window.alert('Document nesnesi içerisinde silinecek p elementi yok.');

	}


}