var idList = document.getElementById('test');

idList.style.color= 'red';

var classList = document.getElementsByClassName('test');

var classListLength = classList.length;

for (var i = 0; i < classListLength; i++) {
	classList[i].style.color= 'blue';
}
