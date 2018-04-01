function test(name, surname, age) {

	this.name = name;
	this.surname = surname;
	this.age = age;

	alert(name, surname, age);

}

test('ok', 'me', 18);