var x = document.querySelector('.parent');

var y = document.querySelector('.child');


console.log(x.offsetHeight);

console.log(y.offsetHeight);

console.log(y.offsetWidth);

y.style.position= 'absolute';
y.style.top= '50%';
y.style.left= '50%';
y.style.marginLeft= '-50px';