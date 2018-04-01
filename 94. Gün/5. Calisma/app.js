var ulList = document.querySelectorAll('li.hot');

if (ulList.length > 0) {

	for (var i = 0; i < ulList.length; i++) {
		ulList[i].textContent = 'Ok';
	}

}