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
	      //Hide all the rain drops
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

	// Power Off Standby Clicked
	$('.fa-power-off').click(function(){
		// Color selection modal
		$('#colorSelectModal').modal('show');
	});

	// Standby Launch Clicked
	$('#standByMode').click(function(){
		// Get the color selected and the power icon element
		var getColor = document.querySelector('#selectColor').value;
		var getElement = document.querySelector('.fa-power-off');

		// Hide the Color selection modal
		$('#colorSelectModal').modal('hide');

		// Call function with 2 arguments/data -- getElement and getColor
		changeColorForStandby(getElement, getColor);
	});

	// Function to change color and ui when standby information is clicked
	function changeColorForStandby (element, color) {
		console.log(element)
		console.log(color)

		// 3rd function pattern - Self invoking Function Expression
		var hideTheUi = function () {
			// Hide all the UI panels/cols this doesn't really work because of !important in the css...
			// $('.col-2').hide();
			// $('.col-2').removeClass('d-flex');

			// Eventually used this code....
			$('.col-2').css('visibility', 'hidden');
		}();
		// function expression ENDS

		// A standard Function Declaration
		function changeElementCss () {
			// console.log(element);style.display
			element.style.color = color;
			element.style.visibility = 'visible';
			console.dir(element);
		}

		changeElementCss();
	}
	// function ENDS

}());
// Global Wrapping Function ENDS
