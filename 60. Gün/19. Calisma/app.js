var str = 'çekmeceden kalktı tren, koca kıçında yaptı fren';

var regex = /kıç/gi;

var result = str.replace(regex, '.');

console.log(result);
