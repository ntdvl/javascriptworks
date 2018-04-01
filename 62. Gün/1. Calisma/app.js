var ctx;

var init = function () {

	ctx = document.getElementById('c').getContext('2d');
	ctx.fillStyle = "blue";
	degis();

}

var degis = function() {

	var keys = "";
	for (var i = 0; i < 6; i++) {
		var rnd = Math.random();

		if (Math.round(rnd) == 0) {

			keys += String.fromCharCode(48 + 9 * Math.random());

		} else {

			keys += String.fromCharCode(65 + 25 * Math.random());

		}
	}

	ctx.clearRect(0, 0, 0, 0);
	ctx.fillRect(0, 0, 150, 50);
	ctx.font = "30px Open Sans";
	ctx.strokeText(keys, 24, 24);

}