var x = new Date();

var hour = x.getHours();

var weekend = true

if ((hour > 17) && (!weekend)) {

	console.log('You\'d be at school'); // 'You\'d be at school'

} else {

	console.log('Test');

}