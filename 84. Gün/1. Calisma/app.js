var human = {

	name: 'Ahmet',
	age: 28,
	averageLifeSpan: 78,
	body: true,
	languages: ['English', 'Russian', 'Spanish'],
	remainig: function() {
		return this.averageLifeSpan - this.age;
	},
}

// console.log(human['name']);
// console.log(human.name);
// console.log(human.languages[0]);
// console.log(human.remainig());

var human2 = new Object();

human2.name = 'John';
human2.age = 29;
human2.averageLifeSpan= 85;
human2.languages = ['Turkish', 'Portuguese', 'French'];

// console.log(human2.name);
// console.log(human2.age);
// console.log(human2.languages[0]);

function Human(name, age, languages) {

	this.name = name;
	this.age = age;
	this.languages = ['Turkish', 'English', 'Dutch'];

}

var testHuman = new Human('Erdal', 28);