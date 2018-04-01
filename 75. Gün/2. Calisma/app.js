var divList = document.querySelectorAll('input[value="note"]');

console.log(divList)

for (var i = 0; i < divList.length; i++) {
	divList[i].style.height= '42px';
}