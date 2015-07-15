


$(document).ready(function() {
	console.log('ready');


	var category = {
		"cake" :[
			"opt1" :{
				'imgURL' : 'http://i.imgur.com/VisMKc3.jpg',
				'description' : 'classic-cake'
			},
			"opt2":{
                'imgURL': 'path/to/img.jpg',
                'description' : 'modern-cake'

			},
			"opt3":{
                'imgURL': 'path/to/img.jpg',
                'description' : 'glam-cake'
            },
            "opt4":{
                'imgURL': 'path/to/img.jpg',
                'description' : 'shabby-chic-cake'
            }
         ],

		"flowers" :[
			"opt1" :{
					'imgURL' : 'path/to/img.jpg',
					'description' : 'classic-flowers'
				},
				"opt2":{
	                'imgURL': 'path/to/img.jpg',
	                'description' : 'mordern-flowers'

				},
				"opt3":{
	                'imgURL': 'path/to/img.jpg',
	                'description' : 'glam-flowers'
	            },
	            "opt4":{
	                'imgURL': 'path/to/img.jpg',
	                'description' : 'shabby-chic-flowers'
	            }
	    ],   

		"locations" :[
			"opt1" :{
					'imgURL' : 'path/to/img.jpg',
					'description' : 'classic-locations'
				},
				"opt2":{
	                'imgURL': 'path/to/img.jpg',
	                'description' : 'modern-locations'

				},
				"opt3":{
	                'imgURL': 'path/to/img.jpg',
	                'description' : 'glam-locations'
	            },
	            "opt4":{
	                'imgURL': 'path/to/img.jpg',
	                'description' : 'shabby-chic-locations'
	            }
	    ],

		"shoes" :[
			"opt1" :{
					'imgURL' : 'path/to/img.jpg',
					'description' : 'classic-shoes'
				},
				"opt2":{
	                'imgURL': 'path/to/img.jpg',
	                'description' : 'modern-shoes'

				},
				"opt3":{
	                'imgURL': 'path/to/img.jpg',
	                'description' : 'glam-shoes'
	            },
	            "opt4":{
	                'imgURL': 'path/to/img.jpg',
	                'description' : 'shabby-chic-shoes'
	            }
	    ],


		"details" :[
			"opt1" :{
					'imgURL' : 'path/to/img.jpg',
					'description' : 'classic-details'
				},
				"opt2":{
	                'imgURL': 'path/to/img.jpg',
	                'description' : 'modern-details'

				},
				"opt3":{
	                'imgURL': 'path/to/img.jpg',
	                'description' : 'glam-details'
	            },
	            "opt4":{
	                'imgURL': 'path/to/img.jpg',
	                'description' : 'shabby-chic-details'
	            }
	    ],

		"favors" :[
			"opt1" :{
					'imgURL' : 'path/to/img.jpg',
					'description' : 'classic-favors'
				},
				"opt2":{
	                'imgURL': 'path/to/img.jpg',
	                'description' : 'modern-favors'

				},
				"opt3":{
	                'imgURL': 'path/to/img.jpg',
	                'description' : 'glam-favors'
	            },
	            "opt4":{
	                'imgURL': 'path/to/img.jpg',
	                'description' : 'shabby-chic-favors'
	            }
	    ],

		"dress" :[
			"opt1" :{
					'imgURL' : 'path/to/img.jpg',
					'description' : 'classic-dress'
				},
				"opt2":{
	                'imgURL': 'path/to/img.jpg',
	                'description' : 'modern-dress'

				},
				"opt3":{
	                'imgURL': 'path/to/img.jpg',
	                'description' : 'glam-dress'
	            },
	            "opt4":{
	                'imgURL': 'path/to/img.jpg',
	                'description' : 'shabby-chic-dress'
	            }
	    ],

		"rings" :[
			"opt1" :{
					'imgURL' : 'path/to/img.jpg',
					'description' : 'classic-ring'
				},
				"opt2":{
	                'imgURL': 'path/to/img.jpg',
	                'description' : 'modern-ring'

				},
				"opt3":{
	                'imgURL': 'path/to/img.jpg',
	                'description' : 'glam-ring'
	            },
	            "opt4":{
	                'imgURL': 'path/to/img.jpg',
	                'description' : 'shabby-chic-ring'
	            }
	    ]
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