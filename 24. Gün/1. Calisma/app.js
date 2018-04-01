var score = parseInt(prompt('What is your exam score ?'), 10);

var result ;

switch (score) {
	case 100:
	case 99:
	case 98:
	case 97:
	case 96:
	case 95:
	case 94:
	case 93:
	case 92:
		result = "excelentaa";
	break;

	default:
		result = 'Bu skor için bir değer girilmemiş.';
	break;
}

document.getElementById('test').innerHTML = result;
/* 
Bu örneğimizde kullanıcıya soru sorup daha sonra girdiği metni sayıya çevirerek switch case uygulaması yaptık. 
Bir şey daha öğrendik
*/