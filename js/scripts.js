$(document).ready(function() {
  console.log('ready');

  var itemCategory;

  function callCategory() {

    console.log(itemCategory)

    var options = {
      'classic' : '_classic',
      'modern'  : '_modern',
      'shabby'  : '_shabby',
      'glam'    : '_glam'
  };


  	var classic = options.classic;
  	var modern  = options.modern;
  	var shabby  = options.shabby;
  	var glam    = options.glam;

  	$('.category').append('<form></form>');
  
  	$('.category form').append('<label><img src="images/' + itemCategory + classic + '.jpg"/><input type="radio" name="' + itemCategory + '" value="classic"></label>'); 
  	$('.category form').append('<label><img src="images/' + itemCategory + modern + '.jpg"/><input type="radio" name="' + itemCategory + '" value="modern"></label>');
  	$('.category form').append('<label><img src="images/' + itemCategory + shabby + '.jpg"/><input type="radio" name="' + itemCategory + '" value="shabby"></label>');
  	$('.category form').append('<label><img src="images/' + itemCategory + glam + '.jpg"/><input type="radio" name="' + itemCategory + '" value="glam"></label>');
  	$('.category form').append('<input class="submit" type="submit" value="Submit">')
  }

  // category navigation
   $('nav').on('click', 'a', function() {
	 console.log('nav item clicked');

	  itemCategory = $(this).text().toLowerCase();
	  
	  console.log(itemCategory)


  $('.category').empty();
	  callCategory();
  });

// option selection
	$('.category').on('click', 'img', function() {
		console.log(this);
		$('.category img').removeClass('checked')
		$(this).addClass('checked')
	})

	$('form').submit(function(e) {
  e.preventDefault();
  console.log('submit');
  });

});

