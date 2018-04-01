var testList = document.getElementsByClassName('test');

if (testList.length >= 1) {

	for (var i = 0; i < testList.length; i++) {
		testList[i].style.color= 'red';
	}

} else {

	console.log('Olmadı');

}