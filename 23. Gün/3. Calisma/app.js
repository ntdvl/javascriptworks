var test = prompt('Çıkmak istiyor musunuz ? E/H');


switch(test) {
	case 'e':
	case 'E':
	window.close(); // Hatalı bir kullanım yapmış olduk. Eğer biz bir pencere açtırmışsak onu window.close(); metodu ile kapatabiliriz.
	break;

	case 'h':
	case 'H':
	window.alert('Hiçbir şey yapılmıyor.');
	break;

	default: 
	window.alert('Mırrr');
	break;
}