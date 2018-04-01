var hotel = {

	name: 'Blue',
	rooms: 40,
	star: 5,
	pool: true,
	gym: false,
	book: function() {
		return this.rooms - 1;
	},
	availability: function() {

		return this.rooms;

	}
}
