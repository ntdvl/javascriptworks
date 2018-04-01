var _x = prompt('Aylık kazanç miktarınız nedir ?');
var _y = 2;

if (((_x > 2500) && (_y < 4)) || (_x % _y < 800))  {
	console.log('Bu ay alışverişe çıkabilirsin');
} else {
	console.log('Bu ay alışveriş yapma');
}