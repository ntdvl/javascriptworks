var init = function() {

	var key = "";

	for (var i = 0; i < 6; i++) {
		console.log(key += String.fromCharCode(48 + 9 * Math.random()));
	} 

}