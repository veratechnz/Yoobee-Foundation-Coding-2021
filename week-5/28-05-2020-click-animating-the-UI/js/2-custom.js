// All Custom JS

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

	// All code for rain effect with Toggles
	var action = 1;

	$(".fa-bath").on("click", viewSomething);

	// A toggle function using the action variable above
	function viewSomething() {
	    if ( action == 1 ) {
	    	// Call the make it rain function
			makeItRain();
	    	action = 2;
	    } else {
	      $('.drop').hide();
	      action = 1;
	    }
	}

	
	// Shuttle Animation
	$('.fa-space-shuttle').click(function(){
		// Change color
		$('.fa-space-shuttle').css('color', 'red');
		// Add class take-off css from animation-effect.css
		$('.fa-space-shuttle').addClass('take-off');
	});

}());
// Global Wrapping Function ENDS