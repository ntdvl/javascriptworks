var formList = document.getElementById('testForm');

var selectType = document.getElementById('type');

var typeTip = document.getElementById('typetip');

var cond = document.getElementById('check');

var condMessage = document.getElementById('checkresult');

function conditions(e) {

	if (!cond.checked) {

		condMessage.innerHTML = 'You must agree to the terms';
		e.preventDefault();

	}

}

function typeFunc() {

	var car = this.options[this.selectedIndex].value;

	if (car == 1) {

		typeTip.innerHTML = 'Wawww';

	} else {

		typeTip.innerHTML = 'Oh, ho';

	}

}

formList.addEventListener('submit', conditions, false);
selectType.addEventListener('change', typeFunc, false);