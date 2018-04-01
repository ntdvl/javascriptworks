var ulList = document.querySelector('#test');

var x = document.createElement('li');

x.textContent = 'Test li içerik';
x.style.listStyleType= 'none';

ulList.appendChild(x);