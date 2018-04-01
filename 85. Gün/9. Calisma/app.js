var msg = '<h2>browser window</h2><p>width : ' + window.innerWidth + '</p>';
msg += '<p>height : ' + window.innerHeight + '</p>';
msg += '<p>history: ' + window.history.length + '</p>';
msg += '<p>screen width: ' + window.screen.width + '</p>';
msg += '<p>screen height: ' + window.screen.height + '</p>';

var el = document.querySelector('#info');
el.innerHTML = msg;

function git() {

	history.back();

}