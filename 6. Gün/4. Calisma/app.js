var time = new Date();


var date = time.getDate();
var month = time.getMonth();
var year = time.getFullYear();
var day = time.getDay();

if (day == 1) {
	var day = "Pazartesi";
}

console.log(day + ',' + month + ',' + date + ',' + year);

/* Javascript ile bugünün tarihini aldık */