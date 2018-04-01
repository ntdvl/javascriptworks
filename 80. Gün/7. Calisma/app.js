var x = document.getElementById('test-li');

var y = document.createElement('li');

y.id = 'testt-li';

y.textContent = 'Yeni oluşturulan element';

var parentDiv = x.parentNode;

parentDiv.replaceChild(y, x);