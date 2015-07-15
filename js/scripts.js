


$(document).ready(function() {
	console.log('ready');


	var category= [
		
		'dress' :[

			'opt1' :{
					'imgURL' : '../images/dress_classic',
					'description' : 'classic-dress'
				},
				'opt2':{
	                'imgURL': '../images/dress_modern',
	                'description' : 'modern-dress'

				},
				'opt3':{
	                'imgURL': '../images/dress_shabby',
	                'description' : 'shabby-chic-dress'
	            },
	            'opt4':{
	                'imgURL': '../images/dress_glam',
	                'description' : 'glam-dress'
	            }
	    ],

		'rings' :[
			'opt1' :{
					'imgURL' : '../images/rings_classic',
					'description' : 'classic-ring'
				},
				'opt2':{
	                'imgURL': '../images/rings_modern',
	                'description' : 'modern-ring'

				},
				'opt3':{
	                'imgURL': '../images/rings_shabby',
	                'description' : 'shabby-chic-ring'
	            },
	            'opt4':{
	                'imgURL': '../images/rings_glam',
	                'description' : 'glam-ring'
	            }
	    ],


		'ceremony' :[
			'opt1' :{
					'imgURL' : '../images/ceremony_classic',
					'description' : 'classic-ceremony'
				},
				'opt2':{
	                'imgURL': '../images/ceremony_modern',
	                'description' : 'modern-ceremony'

				},
				'opt3':{
	                'imgURL': '../images/ceremony_shabbychic',
	                'description' : 'shabby-chic-ceremony'
	            },
	            'opt4':{
	                'imgURL': '../images/ceremony_glam',
	                'description' : 'glam-ceremony'
	            }
	    ],


		'shoes' :[
			'opt1' :{
					'imgURL' : '../images/shoes_classic',
					'description' : 'classic-shoes'
				},
				'opt2':{
	                'imgURL': '../images/shoes_modern',
	                'description' : 'modern-shoes'

				},
				'opt3':{
	                'imgURL': '../images/shoes_shabby',
	                'description' : 'shabby-shoes'
	            },
	            'opt4':{
	                'imgURL': '../images/shoes_glam',
	                'description' : 'glam-shoes'
	            }
	    ],

		'flowers' :[
			'opt1' :{
					'imgURL' : '../images/flower_classic',
					'description' : 'classic-flowers'
				},
				'opt2':{
	                'imgURL': '../images/flower_modern',
	                'description' : 'mordern-flowers'

				},
				'opt3':{
	                'imgURL': '../images/flower_shabby',
	                'description' : 'shabby-chic-flowers'
	            },
	            'opt4':{
	                'imgURL': '../images/flower_glam',
	                'description' : 'glam-flowers'
	            }
	    ],   


		'details' :[
			'opt1' :{
					'imgURL' : '../images/details_classic',
					'description' : 'classic-details'
				},
				'opt2':{
	                'imgURL': '../images/details_modern',
	                'description' : 'modern-details'

				},
				'opt3':{
	                'imgURL': '../images/details_shabby',
	                'description' : 'shabby-chic-details'
	            },
	            'opt4':{
	                'imgURL': '../images/details_glam',
	                'description' : 'glam-details'
	            }
	    ],


		'favors' :[
			'opt1' :{
					'imgURL' : '../images/favors_classic',
					'description' : 'classic-favors'
				},
				'opt2':{
	                'imgURL': '../images/favors_modern',
	                'description' : 'modern-favors'

				},
				'opt3':{
	                'imgURL': '../images/favors_shabby',
	                'description' : 'shabby-chic-favors'
	            },
	            'opt4':{
	                'imgURL': '../images/favors_glam',
	                'description' : 'glam-favors'
	            }
	    ],


	    'cake' :[
			'opt1' :{
				'imgURL' : '../images/cake_classic.jpg',
				'description' : 'classic-cake'
			},
			'opt2':{
                'imgURL': '../images/cake_modern.jpg',
                'description' : 'modern-cake'

			},
			'opt3':{
                'imgURL': '../images/cake_shabby.jpg',
                'description' : 'shabby-chic-cake'
            },
            'opt4':{
                'imgURL': '../images/cake_glam.jpg',
                'description' : 'glam-cake'
            }
         ]
	];

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


