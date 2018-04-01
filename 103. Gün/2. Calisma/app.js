var result = '<div class=\"header\"><a id=\"close\" href="#">close</a></div>';
result += '<div><h2>System Maintenance</h2></div>';
result += 'Our servers are being updated between 3 and 4 a.m.';
result += 'During this thime, there may be minor distruptions to service.';


var note = document.createElement('div');
note.setAttribute('id', 'backup');
note.innerHTML = result;
document.body.appendChild(note);

function ok() {

	document.body.removeChild(note);

}

var x = document.getElementById('close');

x.addEventListener('click', ok, false);