var ulList = document.querySelector('ul');

var add = document.createElement('li');

ulList.appendChild(add);

add.textContent = 'Test li içerik';

console.log(ulList.children);