$(document).ready(function() {
  console.log('ready');

  $('form').submit(function(e) {
    e.preventDefault();
    console.log('submit');
  });

//DRESSES
//DRESSES

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

  	// $('.category').append('<h2>' + categoryTitle + '</h2>');
  	$('.category').append('<form></form>');

  	$('.form').wrap('<h2>')


  	$('.category form').append('<label><img src="images/' + opt1 + '.jpg"/><input type="radio" name="dress" value="choice-1" style="display: none"></label>'); 
  	$('.category form').append('<label><img src="images/' + opt2 + '.jpg"/><input type="radio" name="dress" value="choice-2" style="display: none"></label>');
  	$('.category form').append('<label><img src="images/' + opt3 + '.jpg"/><input type="radio" name="dress" value="choice-3" style="display: none"></label>');
  	$('.category form').append('<label><img src="images/' + opt4 + '.jpg"/><input type="radio" name="dress" value="choice-4" style="display: none"></label>');
  	$('.category form').append('<input class="submit" type="submit" value="Submit">')
  	
  }


// // RINGS
// // RINGS

//   var category = {
//     'rings': {
//       'categoryTitle': 'Rings',

//       'opt1': {
//         'imgURL': 'ring_classic',
//         'description': 'classic'
//       },
//       'opt2': {
//         'imgURL': 'ring_modern',
//         'description': 'modern'

//       },
//       'opt3': {
//         'imgURL': 'ring_shabby',
//         'description': 'shabby chic'
//       },
//       'opt4': {
//         'imgURL': 'ring_glam',
//         'description': 'glam'
//       }
//     }
//   };

// function callCategory() {
//   	var categoryTitle = category.rings.categoryTitle;
//   	var opt1 = category.rings.opt1.imgURL;
//   	var opt2 = category.rings.opt2.imgURL;
//   	var opt3 = category.rings.opt3.imgURL;
//   	var opt4 = category.rings.opt4.imgURL;

//   	// $('.category').append('<h2>' + categoryTitle + '</h2>');
//   	$('.category').append('<form></form>');

//   	$('.form').wrap('<h2>')


//   	$('.category form').append('<label><img src="images/' + opt1 + '.jpg"/><input type="radio" name="rings" value="choice-1" style="display: none"></label>'); 
//   	$('.category form').append('<label><img src="images/' + opt2 + '.jpg"/><input type="radio" name="rings" value="choice-2" style="display: none"></label>');
//   	$('.category form').append('<label><img src="images/' + opt3 + '.jpg"/><input type="radio" name="rings" value="choice-3" style="display: none"></label>');
//   	$('.category form').append('<label><img src="images/' + opt4 + '.jpg"/><input type="radio" name="rings" value="choice-4" style="display: none"></label>');
//   	$('.category form').append('<input class="submit" type="submit" value="Submit">')
  	
//   }

//  // ceremony
// // ceremony

//   var category = {
//     'ceremony': {
//       'categoryTitle': 'Ceremony',

//       'opt1': {
//         'imgURL': 'ceremony_classic',
//         'description': 'classic'
//       },
//       'opt2': {
//         'imgURL': 'ceremony_modern',
//         'description': 'modern'

//       },
//       'opt3': {
//         'imgURL': 'ceremony_shabby',
//         'description': 'shabby chic'
//       },
//       'opt4': {
//         'imgURL': 'ceremony_glam',
//         'description': 'glam'
//       }
//     }
//   };

// function callCategory() {
//   	var categoryTitle = category.ceremony.categoryTitle;
//   	var opt1 = category.ceremony.opt1.imgURL;
//   	var opt2 = category.ceremony.opt2.imgURL;
//   	var opt3 = category.ceremony.opt3.imgURL;
//   	var opt4 = category.ceremony.opt4.imgURL;

//   	// $('.category').append('<h2>' + categoryTitle + '</h2>');
//   	$('.category').append('<form></form>');

//   	$('.form').wrap('<h2>')


//   	$('.category form').append('<label><img src="images/' + opt1 + '.jpg"/><input type="radio" name="ceremony" value="choice-1" style="display: none"></label>'); 
//   	$('.category form').append('<label><img src="images/' + opt2 + '.jpg"/><input type="radio" name="ceremony" value="choice-2" style="display: none"></label>');
//   	$('.category form').append('<label><img src="images/' + opt3 + '.jpg"/><input type="radio" name="ceremony" value="choice-3" style="display: none"></label>');
//   	$('.category form').append('<label><img src="images/' + opt4 + '.jpg"/><input type="radio" name="ceremony" value="choice-4" style="display: none"></label>');
//   	$('.category form').append('<input class="submit" type="submit" value="Submit">')
  	
//   }

//   // Shoes
// // Shoes

//   var category = {
//     'shoes': {
//       'categoryTitle': 'Shoes',

//       'opt1': {
//         'imgURL': 'shoes_classic',
//         'description': 'classic'
//       },
//       'opt2': {
//         'imgURL': 'shoes_modern',
//         'description': 'modern'

//       },
//       'opt3': {
//         'imgURL': 'shoes_shabby',
//         'description': 'shabby chic'
//       },
//       'opt4': {
//         'imgURL': 'shoes_glam',
//         'description': 'glam'
//       }
//     }
//   };

// function callCategory() {
//   	var categoryTitle = category.shoes.categoryTitle;
//   	var opt1 = category.shoes.opt1.imgURL;
//   	var opt2 = category.shoes.opt2.imgURL;
//   	var opt3 = category.shoes.opt3.imgURL;
//   	var opt4 = category.shoes.opt4.imgURL;

//   	// $('.category').append('<h2>' + categoryTitle + '</h2>');
//   	$('.category').append('<form></form>');

//   	$('.form').wrap('<h2>')

//   	$('.category form').append('<label><img src="images/' + opt1 + '.jpg"/><input type="radio" name="shoes" value="choice-1" style="display: none"></label>'); 
//   	$('.category form').append('<label><img src="images/' + opt2 + '.jpg"/><input type="radio" name="shoes" value="choice-2" style="display: none"></label>');
//   	$('.category form').append('<label><img src="images/' + opt3 + '.jpg"/><input type="radio" name="shoes" value="choice-3" style="display: none"></label>');
//   	$('.category form').append('<label><img src="images/' + opt4 + '.jpg"/><input type="radio" name="shoes" value="choice-4" style="display: none"></label>');
//   	$('.category form').append('<input class="submit" type="submit" value="Submit">')	
//   }

// // FLOWERS
// // FLOWERS

//   var category = {
//     'flowers': {
//       'categoryTitle': 'Flowers',

//       'opt1': {
//         'imgURL': 'flowers_classic',
//         'description': 'classic'
//       },
//       'opt2': {
//         'imgURL': 'flowers_modern',
//         'description': 'modern'

//       },
//       'opt3': {
//         'imgURL': 'flowers_shabby',
//         'description': 'shabby chic'
//       },
//       'opt4': {
//         'imgURL': 'flowers_glam',
//         'description': 'glam'
//       }
//     }
//   };

// function callCategory() {
//   	var categoryTitle = category.flowers.categoryTitle;
//   	var opt1 = category.flowers.opt1.imgURL;
//   	var opt2 = category.flowers.opt2.imgURL;
//   	var opt3 = category.flowers.opt3.imgURL;
//   	var opt4 = category.flowers.opt4.imgURL;

//   	// $('.category').append('<h2>' + categoryTitle + '</h2>');
//   	$('.category').append('<form></form>');

//   	$('.form').wrap('<h2>')

//   	$('.category form').append('<label><img src="images/' + opt1 + '.jpg"/><input type="radio" name="flowers" value="choice-1" style="display: none"></label>'); 
//   	$('.category form').append('<label><img src="images/' + opt2 + '.jpg"/><input type="radio" name="flowers" value="choice-2" style="display: none"></label>');
//   	$('.category form').append('<label><img src="images/' + opt3 + '.jpg"/><input type="radio" name="flowers" value="choice-3" style="display: none"></label>');
//   	$('.category form').append('<label><img src="images/' + opt4 + '.jpg"/><input type="radio" name="flowers" value="choice-4" style="display: none"></label>');
//   	$('.category form').append('<input class="submit" type="submit" value="Submit">')	
//   }

//   // DETAILS
// // DETAILS

//   var category = {
//     'details': {
//       'categoryTitle': 'Details',

//       'opt1': {
//         'imgURL': 'details_classic',
//         'description': 'classic'
//       },
//       'opt2': {
//         'imgURL': 'details_modern',
//         'description': 'modern'

//       },
//       'opt3': {
//         'imgURL': 'details_shabby',
//         'description': 'shabby chic'
//       },
//       'opt4': {
//         'imgURL': 'details_glam',
//         'description': 'glam'
//       }
//     }
//   };

// function callCategory() {
//   	var categoryTitle = category.details.categoryTitle;
//   	var opt1 = category.details.opt1.imgURL;
//   	var opt2 = category.details.opt2.imgURL;
//   	var opt3 = category.details.opt3.imgURL;
//   	var opt4 = category.details.opt4.imgURL;

//   	// $('.category').append('<h2>' + categoryTitle + '</h2>');
//   	$('.category').append('<form></form>');

//   	$('.form').wrap('<h2>')

//   	$('.category form').append('<label><img src="images/' + opt1 + '.jpg"/><input type="radio" name="details" value="choice-1" style="display: none"></label>'); 
//   	$('.category form').append('<label><img src="images/' + opt2 + '.jpg"/><input type="radio" name="details" value="choice-2" style="display: none"></label>');
//   	$('.category form').append('<label><img src="images/' + opt3 + '.jpg"/><input type="radio" name="details" value="choice-3" style="display: none"></label>');
//   	$('.category form').append('<label><img src="images/' + opt4 + '.jpg"/><input type="radio" name="details" value="choice-4" style="display: none"></label>');
//   	$('.category form').append('<input class="submit" type="submit" value="Submit">')	
//   }

//   // FAVORS
// // FAVORS

//   var category = {
//     'favors': {
//       'categoryTitle': 'Favors',

//       'opt1': {
//         'imgURL': 'favors_classic',
//         'description': 'classic'
//       },
//       'opt2': {
//         'imgURL': 'favors_modern',
//         'description': 'modern'

//       },
//       'opt3': {
//         'imgURL': 'favors_shabby',
//         'description': 'shabby chic'
//       },
//       'opt4': {
//         'imgURL': 'favors_glam',
//         'description': 'glam'
//       }
//     }
//   };

// function callCategory() {
//   	var categoryTitle = category.favors.categoryTitle;
//   	var opt1 = category.favors.opt1.imgURL;
//   	var opt2 = category.favors.opt2.imgURL;
//   	var opt3 = category.favors.opt3.imgURL;
//   	var opt4 = category.favors.opt4.imgURL;

//   	// $('.category').append('<h2>' + categoryTitle + '</h2>');
//   	$('.category').append('<form></form>');

//   	$('.form').wrap('<h2>')

//   	$('.category form').append('<label><img src="images/' + opt1 + '.jpg"/><input type="radio" name="favors" value="choice-1" style="display: none"></label>'); 
//   	$('.category form').append('<label><img src="images/' + opt2 + '.jpg"/><input type="radio" name="favors" value="choice-2" style="display: none"></label>');
//   	$('.category form').append('<label><img src="images/' + opt3 + '.jpg"/><input type="radio" name="favors" value="choice-3" style="display: none"></label>');
//   	$('.category form').append('<label><img src="images/' + opt4 + '.jpg"/><input type="radio" name="favors" value="choice-4" style="display: none"></label>');
//   	$('.category form').append('<input class="submit" type="submit" value="Submit">')	
//   }

//    // CAKE
// // CAKE

//   var category = {
//     'cake': {
//       'categoryTitle': 'Cake',

//       'opt1': {
//         'imgURL': 'cake_classic',
//         'description': 'classic'
//       },
//       'opt2': {
//         'imgURL': 'cake_modern',
//         'description': 'modern'

//       },
//       'opt3': {
//         'imgURL': 'cake_shabby',
//         'description': 'shabby chic'
//       },
//       'opt4': {
//         'imgURL': 'cake_glam',
//         'description': 'glam'
//       }
//     }
//   };

// function callCategory() {
//   	var categoryTitle = category.favors.categoryTitle;
//   	var opt1 = category.cake.opt1.imgURL;
//   	var opt2 = category.cake.opt2.imgURL;
//   	var opt3 = category.cake.opt3.imgURL;
//   	var opt4 = category.cake.opt4.imgURL;

//   	// $('.category').append('<h2>' + categoryTitle + '</h2>');
//   	$('.category').append('<form></form>');

//   	$('.form').wrap('<h2>')

//   	$('.category form').append('<label><img src="images/' + opt1 + '.jpg"/><input type="radio" name="cake" value="choice-1" style="display: none"></label>'); 
//   	$('.category form').append('<label><img src="images/' + opt2 + '.jpg"/><input type="radio" name="cake" value="choice-2" style="display: none"></label>');
//   	$('.category form').append('<label><img src="images/' + opt3 + '.jpg"/><input type="radio" name="cake" value="choice-3" style="display: none"></label>');
//   	$('.category form').append('<label><img src="images/' + opt4 + '.jpg"/><input type="radio" name="cake" value="choice-4" style="display: none"></label>');
//   	$('.category form').append('<input class="submit" type="submit" value="Submit">')	
//   }


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

