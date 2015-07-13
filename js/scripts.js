


$(document).ready(function() {
	console.log('ready');


	var category = [
		"cake", "flowers", "locations", "shoes", "details", "favors", "dress", "rings" ];
		console.log(category[2]);



	$('.category').hide();

	$('nav').on('click', 'a', function() {
		console.log('nav item clicked');

		var dot = '.';
		var itemCategory = $(this).text().toLowerCase();	
		$('.category').hide();

		$(dot + itemCategory).show();

		console.log(dot + itemCategory)


	});




   
});