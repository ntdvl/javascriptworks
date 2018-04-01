var classList = document.getElementsByClassName('hot');

for (var i = 0; i < classList.length; i++) {
	classList[i].style.color= 'red';
}

var classList2 = document.getElementsByTagName('li');


for (var i = 0; i < classList2.length; i++) {
	classList2[i].style.fontWeight= 'bold';
}

var classList3 = document.querySelectorAll('#test .hot');

for (var i = 0; i < classList3.length; i++) {
	classList3[i].style.fontSize= '35px';
}