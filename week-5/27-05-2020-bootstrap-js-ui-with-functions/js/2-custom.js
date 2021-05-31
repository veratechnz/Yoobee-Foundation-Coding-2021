// All Custom JS

// Console log the global scope
console.log(window);

// A self invoking function
(function(){
// Write all custom code here

	// Enable/Initialize All Tooltips
	$(function () {
	  $('[data-toggle="tooltip"]').tooltip({html: true})
	})

	// Enable Initialize Popovers
	$(function () {
	  $('[data-toggle="popover"]').popover()
	})

	// Trigger the rain function 
	// makeItRain();

	// Trigger the animation
	$('.fa-space-shuttle').click(function (){
		console.log('aaaa');
		$('.fa-space-shuttle').addClass('bounceInLeft');
		$('.fa-space-shuttle').css('color', 'purple');
	});

}());
// Global Wrapping Function ENDS