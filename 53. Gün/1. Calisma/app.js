var dates = ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'];

var date = new Date();

var moment = dates[date.getDay()];

console.log(moment);