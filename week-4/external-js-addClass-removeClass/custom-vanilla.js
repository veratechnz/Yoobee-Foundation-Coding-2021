// All Custom JS
$(document).ready(function (){

	// Adding and removing classes can be a powerful and clever way to 
	// manipulate and make UI interactive

	// Because we are using '.classes' you will need css to use in combination with this
	// javascript/jQuery.
	var getHolder = document.querySelector('.holder');
	var addClassNavyBtn = document.getElementById('addClassNavy');
	var removeClassNavyBtn = document.getElementById('removeClassNavy');
	var addClassAnimationBtn = document.getElementById('addClassAnimation');
	var removeClassAnimationBtn = document.getElementById('removeClassAnimation');

	// jQuery Click event begins
	addClassNavyBtn.onclick = function (){
		console.log('add class navy button clicked');
		// addClass so color changes
		getHolder.classList.add('navy');
	}

	// jQuery Click event begins
	removeClassNavyBtn.onclick = function (){
		console.log('remove class navy button clicked');
		// remove the class so color dissapears
		getHolder.classList.remove('navy');
	}

	// jQuery Click event begins
	addClassAnimationBtn.onclick = function (){
		console.log('add class animation button clicked');
		// add class so animation begins
		getHolder.classList.add('animation');
	}

	// jQuery Click event begins
	removeClassAnimationBtn.onclick = function (){
		console.log('remove class animation button clicked');
		// remove the class so animation stops
		getHolder.classList.remove('animation');	
	}	


});
// doc ready function ENDS