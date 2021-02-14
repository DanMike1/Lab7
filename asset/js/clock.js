const sec = document.getElementById('sec');
const min = document.getElementById('min');
const hour = document.getElementById('hour');

setInterval(updateClock, 1000);

function updateClock(){
	let date = new Date();
	let secus = date.getSeconds() / 60;
	let minsu = (date.getMinutes() + secus) / 60;
	let hourers = (date.getHours() + minsu) / 12;
    allSec= "rotate(" + (secus * 360) + "deg)"
    allMin = "rotate(" + (minsu * 360) + "deg)"
    allHou = "rotate(" + (hourers * 360) + "deg)"
	sec.style.transform = allSec;
	min.style.transform = allMin;
	hour.style.transform = allHou;
}

updateClock();