function init() {

	var inputList = document.getElementsByTagName('input');

	console.log(inputList);

	var test = document.createElement('input');

	test.id = '3';

	document.body.appendChild(test);

	console.log(inputList);

}