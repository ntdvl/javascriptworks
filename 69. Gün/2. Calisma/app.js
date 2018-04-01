function addTask() {

	var ulList = document.getElementById('todo-list');
	var x = document.createElement('li');
	x.className = window.prompt('Lütfen Yapılacak İşin Önem Derecesini Yazınız', '1 - 5, Önemli - Önemsiz');

	if (x.className > 5) {

		window.alert('Olmadı');

	} else {

		switch(x.className) {

			case '1':
			x.className = 'very-important';
			break;

			case '2':
			x.className = 'important';
			break;

			case '3':
			x.className = 'middle';
			break;

			case '4':
			x.className = 'unimportant';
			break;

			case '5':
			x.className = 'low-priority';
			break;

			default:
			x.className = 'undefined';
			break;

		}

	}

	x.textContent = window.prompt('Lütfen Yapmayı Planladığınız Bir Görev Yazınız');
	ulList.appendChild(x);

}

function removeTask(){

	var listCollection = document.getElementsByTagName(li);

	for (var i = 0; i < listCollection.length; i++) {
		console.log('test');
	}

}

