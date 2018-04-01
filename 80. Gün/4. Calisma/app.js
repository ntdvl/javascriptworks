var x = document.createElement('div');

x.id = 'test-div';

x.textContent = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas expedita totam esse magnam repudiandae fugit earum possimus officia, labore, beatae nam perspiciatis minima fugiat vitae reprehenderit dolor, voluptas illum eveniet!';

var y = document.getElementById('el');

document.body.insertBefore(x, y);