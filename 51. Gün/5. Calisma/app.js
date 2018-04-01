var test = function () {

	for (var i = 0; i < arguments.length; i++) {
		console.log('arguments['+i+']=' + arguments[i]);
	}

}


test(5,3,6,8,9,10,1,1,11,1);