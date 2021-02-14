const sec = document.getElementById('sec');
const min = document.getElementById('min');
const hour = document.getElementById('hour');

setInterval(updateClock, 1000);

function updateClock(){
	let date = new Date();
	let seconds = date.getSeconds() / 60;
	let minutess = (date.getMinutes() + sec) / 60;
	let hours = (date.getHours() + min) / 12;
    
    secs="rotate(" + (seconds * 360) + "deg)"
    mines ="rotate(" + (minutess * 360) + "deg)"
    hourss =  "rotate(" + (hours * 360) + "deg)"

	sec.style.transform = secs;
	min.style.transform = mines;
	hour.style.transform = hourss;
}

updateClock();