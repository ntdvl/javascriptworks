var numbers = [1, 5, 8, 11, 13, 15];
			   
			    
				
console.table(numbers);

console.log(numbers.sort(function(a, b) { // Artan sıralama için
	return a - b;
}));

console.log(numbers.sort(function(a, b) { // Azalan sırama için
	return b - a;
}));