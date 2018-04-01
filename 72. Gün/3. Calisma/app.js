var x = document.getElementById('testPar');

x.innerHTML = 'document.getElementById ile oluşturuldu';

var y = document.getElementsByTagName('span');

for (var i = 0; i < y.length; i++) {
	y[i].innerHTML = 'document.getElementsByTagName ile oluşturuldu' + '<br>';
}

var z = document.getElementsByClassName('testParC')[0];

z.innerHTML = 'document.getElementsByClassName ile oluşturuldu';

var t = document.getElementsByName('testForm')[0];

t.value = 'document.getElementsByName ile oluşturuldu';

var q = document.querySelector(' [name="testForm"] ');

q.value = 'Test';