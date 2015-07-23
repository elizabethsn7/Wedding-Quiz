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
        'imgURL': 'dress_classic',
        'description': 'classic'
      },
      'opt2': {
        'imgURL': 'dress_modern',
        'description': 'modern'

      },
      'opt3': {
        'imgURL': 'dress_shabby',
        'description': 'shabby chic'
      },
      'opt4': {
        'imgURL': 'dress_glam',
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


  	$('.category form').append('<label><img src="images/' + opt1 + '.jpg"/><input type="radio" name="dress" value="choice-1" style="display: none"></label>'); 
  	$('.category form').append('<label><img src="images/' + opt2 + '.jpg"/><input type="radio" name="dress" value="choice-2" style="display: none"></label>');
  	$('.category form').append('<label><img src="images/' + opt3 + '.jpg"/><input type="radio" name="dress" value="choice-3" style="display: none"></label>');
  	$('.category form').append('<label><img src="images/' + opt4 + '.jpg"/><input type="radio" name="dress" value="choice-4" style="display: none"></label>');
  	$('.category form').append('<input type="submit" value="Submit">')
  	$('form input[type=radio]:checked');
  	console.log('changed');
  		$('input[name=dresses]').on('click',function(){   
        console.log('clicked');	
  		})
	  }



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

