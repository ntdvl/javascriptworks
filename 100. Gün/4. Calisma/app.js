function checkUserName(e) {

	var target = e.target;
	var x = e.type;
	var y = e.cancelable;
	console.log(target);
	console.log(x);
	console.log(y);

}

var x = document.getElementById('test');
x.addEventListener('blur', checkUserName, false);