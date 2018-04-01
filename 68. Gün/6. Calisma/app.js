var init = function() {

	var isaretle = function(pListRef, color) {

		for (var i = 0; i < pListRef.length; i++) {
			var el = pListRef.item(i);
			el.style.backgroundColor = color;
		}

	}

	var pList1 = document.getElementsByClassName('ctx');
	isaretle(pList1, 'khaki');

	var pList2 = document.getElementsByClassName('p1 p2');
	isaretle(pList2, 'gray');



}