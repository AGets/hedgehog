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

$(document).ready(function(){
	$('.columnLeft').accordion();
});
$(document).ready(function(){
	$('.columnRight').accordion();
});

/*Copied from web*/

$(document).ready(function() {
    function close_accordion_section() {
        $('.accordion .accordion-section-title').removeClass('active');
        $('.accordion .accordion-section-content').slideUp(300).removeClass('open');
    }
 
    $('.accordion-section-title').click(function(e) {
        // Grab current anchor value
        var currentAttrValue = $(this).attr('href');
 
        if($(e.target).is('.active')) {
            close_accordion_section();
        }else {
            close_accordion_section();
 
            // Add active class to section title
            $(this).addClass('active');
            // Open up the hidden content panel
            $('.accordion ' + currentAttrValue).slideDown(300).addClass('open'); 
        }
 
        e.preventDefault();
    });
});
