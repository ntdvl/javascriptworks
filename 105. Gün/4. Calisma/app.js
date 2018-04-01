var textarea = document.getElementById('twitter')

var charLimit = 180;

textarea.addEventListener('keypress', charCount, false);

function charCount() {

	var textareaEntered = textarea.value;

	var result = document.getElementById('result');
	result.innerHTML = charLimit - textareaEntered.length;

	if (textareaEntered.length < charLimit) {

		result.className = 'success';

	} else {

		result.className = 'error';

	}

}