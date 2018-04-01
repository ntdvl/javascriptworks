var birds = document.getElementsByTagName('li');

for (var i = 0; i < birds.length; i++) {
if (birds[i].matches('.endangered')) {
  console.log('The ' + birds[i].textContent + ' is endangered!');
}
}