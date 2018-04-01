var x = document.getElementById('name');
var result = document.getElementById('result');

function checkUserName() {

	if (x.value.length < 5) {

		result.textContent = 'Yeteri kadar uzun bir isim girmediniz';

	} else {

		result.textContent = 'Ok';

	}

}

function tipUserName() {

	result.textContent = 'En az 5 karakter girmelisiniz';

}

x.addEventListener('blur', checkUserName, false);
x.addEventListener('focus', tipUserName, false);