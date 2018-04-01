var input = document.getElementById('username');
var result = document.getElementById('feedback');

function checkUsername() {

	var inputValue = input.value;
	if (inputValue.length < 5) {

		result.textContent = 'Sisteme üye olabilmek için en az 5 karakter girmelisiniz.';
		result.className = 'warning';

	} else {
		result.textContent = ' ';
	}

}

function tipUsername() {

	result.textContent = 'Kullanıcı adı en az 5 karakter olmalıdır';
	result.className = 'info';

}

input.addEventListener('focus', tipUsername, false);
input.addEventListener('blur', checkUsername, false);