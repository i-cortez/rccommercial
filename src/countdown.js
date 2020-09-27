// countdown.js
//
// Ismael Cortez
// 9-16-2020
// RC Commercial Coatings, LLC temporary webpage
//
// This file contains javascript for a countdown timer
//

// the target date
let targetDate = new Date("Oct 1, 2020 00:00:00").getTime();

// update for every second
let countFunction = setInterval(function() {
	
	// todays date and time
	let current = new Date().getTime();
	
	// time remaining
	let diff = targetDate - current;
	
	// time calculations
	let m = 1000 * 60;
	let h = m * 60;
	let days = Math.floor(diff / (h * 24));
	let hours = Math.floor((diff % (h * 24)) / h);
	let minutes = Math.floor((diff % h) / m);
	let seconds = Math.floor((diff % m) / 1000);
	
	// Output the result in an element with id="demo"
	document.getElementById("demo").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
  
	// If the count down is over, write some text 
	if (diff < 0)
	{
		clearInterval(countFunction);
		document.getElementById("demo").innerHTML = "EXPIRED";
	}
}, 1000);

