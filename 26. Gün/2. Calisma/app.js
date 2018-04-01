for (var i = 0; i < 20; i++) {
	if (i > 15) {
		continue;
	}
	console.log(i);
}

/* 
Bu örneğimizde for döngüsü içerisinde 0 sayısından 20 sayısına kadar bir döngü oluşturup bu döngüde console'a yazdırılacak
sayıların 15 sayısından büyük olması durumunda 15 sayısının yazılmadan diğer sayılara geçmesini sağladık.
*/