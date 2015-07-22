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
        'imgURL': '../images/dress_classic',
        'description': 'classic-dress'
      },
      'opt2': {
        'imgURL': '../images/dress_modern',
        'description': 'modern'

      },
      'opt3': {
        'imgURL': '../images/dress_shabby',
        'description': 'shabby chic'
      },
      'opt4': {
        'imgURL': '../images/dress_glam',
        'description': 'glam'
      }
    }
  }


  function callCategory() {
  	var categoryTitle = category.dresses.categoryTitle;
  	var opt1 = category.dresses.opt1.imgURL;

  	$('.category').append('<h2>' + categoryTitle + '</h2>');
  	$('.category').append('<img>' + opt1 + '</img>'); //psuedo code
  	
  };

	  


	  $('.category').hide();

	  $('nav').on('click', 'a', function() {
	    console.log('nav item clicked');

	    var dot = '.';
	    var itemCategory = $(this).text().toLowerCase();
	    $('.category').hide();

	    $(dot + itemCategory).show();
	    callCategory();

	    console.log(dot + itemCategory)

  });

});

