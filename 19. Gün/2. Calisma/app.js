function greet(name, lastname) {
	$year = window.prompt('How old are you ?');
	if ($year != '') {
		if ($year < 18) {
			window.alert('You are very little.');
		} else {
			$name = window.prompt('What is your name ?')
			$lastname = window.prompt('What is your lastname ?')
			if ($name && $lastname != '') {
				window.alert('Welcome ' + $name + ' ' + $lastname + '.');
			} else {
				window.alert('Please, type your name.');
			}
		}
	} else {
		window.alert('Please, type your age.');
	}
}

// Kısmen istediğim şeyi yaptım. Ama ilk dialog kutusunda user 'Cancel' derse ilk if blogu çalışıyor. Hata var.