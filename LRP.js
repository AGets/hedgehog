var $ = document.querySelectorAll.bind(document);

var motto = $('.motto');

var x = function (evt){
	var userInput = prompt("Want to be a hedgehog?");
	console.log(userInput);
	evt.target.removeEventListener('mouseover', x);
}

motto[0].addEventListener('mouseover', x);

var smokeSignal = $('.contact');

var y = function (evt){
	var userInput = prompt("Need wet wood?");
	console.log(userInput);
	evt.target.removeEventListener('mouseover', y);
}

smokeSignal[0].addEventListener('mouseover', y);