// JavaScript Document

// set the date we're counting down to
let targetDate = new Date("October 1, 2020 00:00:00").getTime();

// update the timer every 1 second
let x = setInterval(()=>{
	let current = new Date.getTime();
	
	// time between now and the target date
	let diff = targetDate - current;
	
	// time calculations
	let min = 1000 * 60;
	let hour = min * 60;
	let days = Math.floor(diff / (hour * 24));
	let hours = Math.floor((diff % (hour * 24)) / (hour));
	let minutes = Math.floor((diff % hour) / min);
	let seconds = Math.floor((diff % min) / 1000);
	
	// display the result in an element with id="demo"
	document.getElementById("demo").innerHTML = days + hours + "h " + minutes + "m " + seconds + "s";
	
	if(diff < 0)
		{
			clearInterval(x);
			document.getElementById("demo").innerHTML = "EXPIRED";
		}
}, 1000);

