var input = document.getElementById('test');

function checkUserName() {

	var result = document.getElementById('result');

	if (this.value.length < 1) {

		result.textContent = 'Boş bırakmayınız';

	} else {

		if (this.value.length < 7) {

			result.textContent = 'En az 7 karakter girmelisiniz';

		} else {

			result.textContent = 'Ok';

		}

	}

}

input.addEventListener('blur', checkUserName, false);