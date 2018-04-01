function getEventTarget(e) {

	if (!e) {

		e = window.event;

	}
	return e.target || e.srcElement;

}