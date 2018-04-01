var previousGain = 1500;

var presentGain = prompt('Bu ayki kazanç miktarınızı girin');

if (presentGain != null) {
	if (presentGain <= previousGain) {
		console.log('Çalışanlarına ek maaş dağıtma. Çünkü önceki aydan daha az para kazanmışsın.');
	} else {
		console.log('Çalışanlarına ek maaş dağıtabilirsin. İşler iyi');
	}
} else {
	console.log('Lütfen bir içerik girin');
}

/* 
Bu örnekte if durumu ile bir kontrol yaptık. Ve eğer kullanıcı boş içerik yollarsa hata verdirdik
*/