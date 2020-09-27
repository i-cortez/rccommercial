// functions.js
//
// Ismael Cortez
// 9-23-2020
// RC Commercial Coatings, LLC Website
//
// This file contains javascript functions for use with the website
//

function showMenu()
{
	let x = document.getElementById("navBar");
	if(x.className.indexOf("w3-show") == -1) x.className += " w3-show";
	else x.className = x.className.replace(" w3-show", "");
}
