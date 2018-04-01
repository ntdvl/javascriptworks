var x = new Date();

var months = ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'];

var days = ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'];

var y = days[x.getDay()];

var z = months[x.getMonth()];

	
console.log('Bugün: ' + z + ' ' + x.getFullYear() + '\n' + 'Saat: ' + x.getHours() + '.' + x.getMinutes());