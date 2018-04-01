var str = 'Sudan çıktı iki su şadısı, biri erkek şu şadısı, diğeri dişi şu şadısı.';

var regex = /su/gi;

console.log(str.match(regex));

// match metodu ile eşleşenleri görüyoruz.