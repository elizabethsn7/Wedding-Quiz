$(document).ready(function() {
  console.log('ready');

  $('form').submit(function(e) {
    e.preventDefault();
    console.log('submit');
  });

  var category = {
    'dresses': {
      'categoryTitle': 'Dresses',

      'opt1': {
        'imgURL': 'dress_classic_lg',
        'description': 'classic'
      },
      'opt2': {
        'imgURL': 'dress_modern_lg',
        'description': 'modern'

      },
      'opt3': {
        'imgURL': 'dress_shabby',
        'description': 'shabby chic'
      },
      'opt4': {
        'imgURL': 'dress_glam_lg',
        'description': 'glam'
      }
    }
  };

  function callCategory() {
  	var categoryTitle = category.dresses.categoryTitle;
  	var opt1 = category.dresses.opt1.imgURL;
  	var opt2 = category.dresses.opt2.imgURL;
  	var opt3 = category.dresses.opt3.imgURL;
  	var opt4 = category.dresses.opt4.imgURL;

  	$('.category').append('<h2>' + categoryTitle + '</h2>');
  	$('.category').append('<form></form>');

  	$('.form').wrap('<h2>')


  	$('.category form').append('<label><img src="images/' + opt1 + '.jpg"/><input type="radio" name="dress" value="choice-1" style="display: none"></label>'); 
  	$('.category form').append('<label><img src="images/' + opt2 + '.jpg"/><input type="radio" name="dress" value="choice-2" style="display: none"></label>');
  	$('.category form').append('<label><img src="images/' + opt3 + '.jpg"/><input type="radio" name="dress" value="choice-3" style="display: none"></label>');
  	$('.category form').append('<label><img src="images/' + opt4 + '.jpg"/><input type="radio" name="dress" value="choice-4" style="display: none"></label>');
  	$('.category form').append('<input class="submit" type="submit" value="Submit">')
  	
  }

	$('.category').on('click', 'img', function() {
		console.log(this);
		$('.category img').removeClass('checked')
		$(this).addClass('checked')
	})

	  $('.category').hide();

	  $('nav').on('click', 'a', function() {
	    console.log('nav item clicked');

	    var dot = '.';
	    var itemCategory = $(this).text().toLowerCase();
	    $('.category').hide();

	    $(dot + itemCategory).show();
	    callCategory();

	    console.log(dot + itemCategory);

  });

});

