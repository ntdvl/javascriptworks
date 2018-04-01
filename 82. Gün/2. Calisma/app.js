function showPlotSize() {

	var width = 3;
	var height = 2;
	return 'Area: ' + (width * height);

}

var msg = showPlotSize();

function showGardenSize() {

	var width = 12;
	var height = 25;
	return width * height;

}

var msg = showGardenSize();

console.log(msg);