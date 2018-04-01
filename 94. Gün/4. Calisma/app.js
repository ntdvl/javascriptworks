var ulList = document.querySelectorAll('li.hot');

for (var i = 0; i < ulList.length; i++) {
	ulList[i].className = 'ok';
	ulList[i].textContent = 'İçerik değiştirildi';
}