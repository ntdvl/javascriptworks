function getSize(width, height, depth) {

	var area = width * height;
	var volume = width * height * depth;
	var sizes = [area, volume];
	return sizes;

}

var x = console.log(getSize(9, 10, 3)[0]);