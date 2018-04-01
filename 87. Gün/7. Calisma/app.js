var date1 = new Date("5 Mar, 2018 20:16");
var date2 = new Date("6 Mar, 2018 20:00");

var diff = Math.abs(date1.getTime() - date2.getTime());

var hourdif = diff / 1000 / 3600;

console.log(hourdif);
console.log('Maça ' + hourdif.toPrecision(3) + ' saat kaldı');