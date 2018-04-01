function setup() {

	var input = document.getElementById('test');
	input.focus();
	console.log('DOMContentLoaded event fired');

}

window.addEventListener('DOMContentLoaded', setup, false);

window.addEventListener('beforeunload', function(event){
	var msg = 'You have changes that have not been saved';
	(event || window.event).returnValue = msg;
	return msg;
})