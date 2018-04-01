function formValidate() {
	var el = document.forms['myForm']['myInput'].value;
	var el2 = document.forms['myForm']['myInput2'].value;

	if (el && el2 != '') {
		window.alert('Başarılı');
	} else {
		window.alert('Başarısız');
	}
}