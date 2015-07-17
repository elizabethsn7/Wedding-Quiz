
$(document).ready(function() {
	console.log('ready');

	$('form').submit(function(e) {
		e.preventDefault();

		if($('.submit').val()=== '') {
			console.log('empty');
		}

	})


		var category = {
			
			'dresses' : {
				'categoryTitle' : 'Dresses'

				'opt1' :{
					'imgURL' : '../images/dress_classic',
					'description' : 'classic-dress'
				},
				'opt2':{
	                'imgURL': '../images/dress_modern',
		            'description' : 'modern'

				},
				'opt3':{
		           'imgURL': '../images/dress_shabby',
		           'description' : 'shabby chic'
		        },
		        'opt4':{
		           'imgURL': '../images/dress_glam',
		           'description' : 'glam'
		        }
		    },

			'rings' : {
				'categoryTitle' : 'Rings'

				'opt1' :{
					'imgURL' : '../images/rings_classic',
					'description' : 'classic'
				},
				'opt2':{
		    	    'imgURL': '../images/rings_modern',
		            'description' : 'modern'

				},
				'opt3':{
		           	'imgURL': '../images/rings_shabby',
		            'description' : 'shabby chic'
		        },
		        'opt4':{
		        	'imgURL': '../images/rings_glam',
		            'description' : 'glam'
		        }
			},


			'ceremony' : {
				'categoryTitle' : 'Ceremony'
				'opt1' :{
					'imgURL' : '../images/ceremony_classic',
					'description' : 'classic'
				},
				'opt2':{
		            'imgURL': '../images/ceremony_modern',
		            'description' : 'modern'

				},
				'opt3':{
		           	'imgURL': '../images/ceremony_shabbychic',
		            'description' : 'shabby chic'
		        },
		        'opt4':{
		            'imgURL': '../images/ceremony_glam',
	                'description' : 'glam'
		        }
		    },


			'shoes' : {
				'categoryTitle' : 'Shoes'

				'opt1' :{
					'imgURL' : '../images/shoes_classic',
					'description' : 'classic'
				},
				'opt2' :{
		       	    'imgURL': '../images/shoes_modern',
		            'description' : 'modern'

				},
				'opt3' :{
		       	    'imgURL': '../images/shoes_shabby',
		            'description' : 'shabby chic'
		        },
		        'opt4' :{
		            'imgURL': '../images/shoes_glam',
		            'description' : 'glam'
		        }
			},

			'flowers' : {
				'categoryTitle' : 'Flowers'

				'opt1' :{
					'imgURL' : '../images/flower_classic',
					'description' : 'classic'
				},
				'opt2' :{
		           'imgURL': '../images/flower_modern',
		            'description' : 'mordern'
				},
				'opt3' :{
		                'imgURL': '../images/flower_shabby',
		                'description' : 'shabby chic'
		        },
		        'opt4' :{
		        'imgURL': '../images/flower_glam',
		        'description' : 'glam'
	            }
			},   


			'details' : {
				'categoryTitle' : 'Details'

				'opt1' :{
					'imgURL' : '../images/details_classic',
					'description' : 'classic'
				},
				'opt2' :{
		            'imgURL': '../images/details_modern',
		            'description' : 'modern'

				},
				'opt3' :{
		            'imgURL': '../images/details_shabby',
		            'description' : 'shabby chic'
		        },
		        'opt4' :{
		        	'imgURL': '../images/details_glam',
		            'description' : 'glam'
				}
			},


			'favors' : {
				'categoryTitle' : 'Favors'

				'opt1' :{
					'imgURL' : '../images/favors_classic',
					'description' : 'classic'
				},
				'opt2' :{
		            'imgURL': '../images/favors_modern',
		            'description' : 'modern'

				},
				'opt3' :{
		            'imgURL': '../images/favors_shabby',
		      	    'description' : 'shabby chic'
		         },
		         'opt4' :{
		           'imgURL': '../images/favors_glam',
	               'description' : 'glam'
		            }
		    },


		    'cake' : {
		    	'categoryTitle' : 'Cake'
				'opt1' :{
					'imgURL' : '../images/cake_classic.jpg',
					'description' : 'classic'
				},
				'opt2':{
	                'imgURL': '../images/cake_modern.jpg',
	                'description' : 'modern'

				},
				'opt3':{
	                'imgURL': '../images/cake_shabby.jpg',
	                'description' : 'shabby chic'
	            },
	            'opt4':{
	                'imgURL': '../images/cake_glam.jpg',
	                'description' : 'glam'
	            }
	        }
	    };


function showCategory() {

		var dresses = category.dress
		'<h2>' + dresses.categoryTitle + '<h2>'
		dresses.opt2

		var rings = category.rings
		'<h2>' + rings.categoryTitle + '<h2>'

		var ceremony = category.ceremony
		'<h2>' + ceremony.categoryTitle + '<h2>'

		var shoes = category.shoes
		'<h2>' + shoes.categoryTitle + '<h2>'

		var flowers = category.flowers
		'<h2>' + flowers.categoryTitle + '<h2>'

		var details = category.details
		'<h2>' + details.categoryTitle + '<h2>'

		var favors = category.favors 
		'<h2>' + favors.categoryTitle + '<h2>'

		var cake = category.cake
		'<h2>' + cake.categoryTitle + '<h2>'

		
	}

if 

	// $('ul').on('click', '.option', function() {
	// 	console.log('clicked category')
	// })


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


