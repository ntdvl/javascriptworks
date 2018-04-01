var text = document.getElementById('text');
var test = document.getElementById('test');

function writeLabel(e) {

	if (!e) {

		e = window.event;

	}
	target = e.target || e.srcElement;
	textEntered = target.value;
	text.textcontent = textEntered;

}

function recorderControls(e) {

	if (!e) {
		e = window.event;
	}
	target = e.target || e.srcElement;
	if (e.preventDefault) {

		e.preventDefault();

	} else {

		e.returnValue = false;

	}

	switch(target.getAttribute('date-state')) {

		case 'record':
		record(target);
		break;

		case 'stop':
		stop(target);
		break;

	}

}

function record(target) {

	target.setAttribute('data-state', 'stop');
	target.textContent = 'stop';

}

function stop(target) {

	target.setAttribute('data-state', 'record');
	target.textCotnent = 'record';

}


if (document.addEventListener) {

	document.addEventListener('click', function(e) {
		recorderControls(e)
	}, false);


} else {

	document.attachEvent('onclick', function(e) {
		recorderControls(e);
	});
	test.attachEvent('onkeyup', writeLabel);

}