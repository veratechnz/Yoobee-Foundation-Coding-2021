// All Custom JS
$(document).ready(function (){

	// Adding and removing classes can be a powerful and clever way to 
	// manipulate and make UI interactive
	
	// Because we are using '.classes' you will need css to use in combination with this
	// javascript/jQuery.

	// jQuery Click event begins
	$('#addClassNavy').click(function (){
		console.log('add class navy button clicked');
		// addClass so color changes
		$('.holder').addClass('navy');	
	});

	// jQuery Click event begins
	$('#removeClassNavy').click(function (){
		console.log('remove class navy button clicked');
		// remove the class so color dissapears
		$('.holder').removeClass('navy');	
	});

	// jQuery Click event begins
	$('#addClassAnimation').click(function (){
		console.log('add class animation button clicked');
		// add class so animation begins
		$('.holder').addClass('animation');	
	});	

	// jQuery Click event begins
	$('#removeClassAnimation').click(function (){
		console.log('remove class animation button clicked');
		// remove the class so animation stops
		$('.holder').removeClass('animation');	
	});	


});
// doc ready function ENDS