var imgList = document.getElementById('test');

imgList.addEventListener('load', test, false);

function test() {

	console.log('Loaded');

}

window.addEventListener('scroll', test2, false);

function test2() {

	console.log('Scrolled');

}