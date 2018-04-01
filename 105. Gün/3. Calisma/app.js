var textarea = document.getElementById('twitter');

var charLimit = 180;

textarea.addEventListener('keyup', charCount, false);

function charCount(e) {

	var result = document.getElementById('result');

	var textareaEntered = textarea.value;

	if (textareaEntered.length > charLimit) {

		result.innerHTML = 'Olmadı';

	} else {

		result.innerHTML = 'Devam et';

	}

}