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
  	var opt2 = category.dresses.opt2.imgURL;
  	var opt3 = category.dresses.opt3.imgURL;
  	var opt4 = category.dresses.opt4.imgURL;

  	$('.category').append('<h2>' + categoryTitle + '</h2>');
  	$('.category').append('<img>' + opt1 + '</img>'); //psuedo 
  	console.log("options");
  	$('.category').append('<img>' + opt2 + '</img>');
  	$('.category').append('<img>' + opt3 + '</img>');
  	$('.category').append('<img>' + opt4 + '</img>');
  	





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

