var button = document.getElementById('delete');

button.addEventListener('click', test, false);

var ulList = document.getElementById('list');

function test() {
	

	var ulChild = ulList.childElementCount;

	if (ulChild > 0) {

		var last = ulList.lastElementChild;

		ulList.removeChild(last);

	} else {

		console.log('There is no more li element');

	}

}

function check() {

	console.log('A Node is removed from the DOM tree.');

}

ulList.addEventListener('DOMNodeRemoved', check, false);