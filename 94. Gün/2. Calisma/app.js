var liList = document.getElementsByTagName('li');

for (var i = 0; i < liList.length; i++) {
	liList[i].className = 'ok';
	liList[i].textContent = 'içerik değiştirildi';
}