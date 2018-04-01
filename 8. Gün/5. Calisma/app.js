var i, toplam;
i = toplam = 0;

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

while (i < numbers.length) {
	toplam += numbers[i];
	i++;
}
document.write(toplam);