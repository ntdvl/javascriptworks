function checkUserName(e) {

	var target = e.target;
	var x = e.type;
	var y = e.cancelable;
	console.log(target);
	console.log(x);
	console.log(y);

}

var input = document.getElementById('test');

input.addEventListener('blur', function(e){
	checkUserName(e, 5);
}, false);