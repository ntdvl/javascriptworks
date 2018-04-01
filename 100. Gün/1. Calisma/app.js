function showElement() {

	alert(this.innerHTML);

}

el = document.getElementById('list');
el.addEventListener('click', showElement, false);

el = document.getElementById('list-item');
el.addEventListener('click', showElement, false);

el = document.getElementById('list-item-link');
el.addEventListener('click', showElement, false);

el = document.getElementById('list2');
el.addEventListener('click', showElement, true);

el = document.getElementById('list-item2');
el.addEventListener('click', showElement, true);

el = document.getElementById('list-item-link2');
el.addEventListener('click', showElement, true);