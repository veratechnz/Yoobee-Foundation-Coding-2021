// All Custom JS
$(document).ready(function (){

	// Some object & array data
	var dataObj = {
		// Two DOM/HTML Queries that are placed in properties instead of variables
		getHolder: document.querySelector('.holder'),
		getHeader: document.querySelector('#headerOne'),
		// A single color property
		color: 'silver',
		// An array as the value of the 'otherColors' property
		otherColors: ['green', 'navy', 'teal', 'purple'],
		// A property 'sizes' with an object as a value
		sizes: {
			// Four properties inside the object
			large: '88px',
			medium: '30px',
			small: '10px',
			// One of the properties is another array, i.e -- an array, inside and object, inside an object
			weights: ['normal', 'bold', 'bolder']
		},
		// This is a Method, methods are properties with a function as a value 'someProperty: function () {}'
		changeFontWeight: function () {
			this.getHeader.style.fontWeight = dataObj.sizes.weights[1];
		}
	}

	// Here we are using dot notation to drill down into the object, 
	// the square brackets[0] to access the array value
	console.log(dataObj.sizes.weights[2]);

	// --------------------------------------------------------------------

	// jQuery click method
	$('#functionOne').click(function(){
		console.log('f1 click working');
		// Calling the function below
		functionOneChangesTheFontColor();
	});

	// Function Declaration
	function functionOneChangesTheFontColor () {
		// You can see the dot notation used here, because dataObj is an object...
		// and getHeader is also another object
		dataObj.getHeader.style.color = dataObj.color;
	}

	// --------------------------------------------------------------------
	// jQuery click method
	$('#functionTwo').click(function(){
		console.log('f2 click working');
		// Calling the function below
		functionTwoChangesSizeOfFontWithjQuery();
	});

	function functionTwoChangesSizeOfFontWithjQuery () {
		// Using jQuery to change the css and access the headerOne element
		$('#headerOne').css('font-size', dataObj.sizes.large);
	}

	// --------------------------------------------------------------------
	// jQuery click method
	$('#method').click(function(){
		console.log('method click working');
		// Using dot notation to access and call the object method/function 'changeFontWeight'
		dataObj.changeFontWeight();
	});

});
// doc ready function ENDS