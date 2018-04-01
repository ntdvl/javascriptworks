var x = 'Test' // type string, global variable


function y () {
	x = 'Exam'; // type string, local variable
	console.log(x);
}


console.log(x);
y();


/* 
Local ve global variable farkı işte tam olarak bu.
*/