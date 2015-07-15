
$(document).ready(function() {
	console.log('ready');


	var dresses = category.dress
	'<h2>' + dresses.categoryTitle + '<h2>'
	dresses.opt2

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
			'opt1' :{
				'imgURL' : '../images/shoes_classic',
				'description' : 'classic'
			},
			'opt2':{
	       	    'imgURL': '../images/shoes_modern',
	            'description' : 'modern'

			},
			'opt3':{
	       	    'imgURL': '../images/shoes_shabby',
	            'description' : 'shabby chic'
	        },
	        'opt4':{
	            'imgURL': '../images/shoes_glam',
	            'description' : 'glam'
	        }
		},

		'flowers' : {
			'opt1' :{
				'imgURL' : '../images/flower_classic',
				'description' : 'classic'
			},
			'opt2':{
	           'imgURL': '../images/flower_modern',
	            'description' : 'mordern'
			},
			'opt3':{
	                'imgURL': '../images/flower_shabby',
	                'description' : 'shabby chic'
	        },
	        'opt4':{
	        'imgURL': '../images/flower_glam',
	        'description' : 'glam'
            }
		},   


		'details' : {
			'opt1' :{
				'imgURL' : '../images/details_classic',
				'description' : 'classic'
			},
			'opt2':{
	            'imgURL': '../images/details_modern',
	            'description' : 'modern'

			},
			'opt3':{
	            'imgURL': '../images/details_shabby',
	            'description' : 'shabby chic'
	        },
	        'opt4':{
	        	'imgURL': '../images/details_glam',
	            'description' : 'glam'
			}
		},


		'favors' : {
			'opt1' :{
				'imgURL' : '../images/favors_classic',
				'description' : 'classic'
			},
			'opt2':{
	            'imgURL': '../images/favors_modern',
	            'description' : 'modern'

			},
			'opt3':{
	            'imgURL': '../images/favors_shabby',
	      	    'description' : 'shabby chic'
	         },
	         'opt4':{
	           'imgURL': '../images/favors_glam',
               'description' : 'glam'
	            }
	    },


	    'cake' : {
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


