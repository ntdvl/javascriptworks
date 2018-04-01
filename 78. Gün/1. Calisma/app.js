// function increaseValue() {
//   var value = parseInt(document.getElementById('number').value, 10);
//   value = isNaN(value) ? 0 : value;
//   value++;
//   document.getElementById('number').value = value;
// }

function arttir() {

	var x = document.getElementById('test').value;
	var y = parseInt(x, 10);

	x = isNaN(x) ? 0: x;
	x++;
	document.getElementById('test').value = x;


}