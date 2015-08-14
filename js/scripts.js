var categoryArray = ['dresses', 'rings', 'ceremony', 'shoes', 'flowers', 'details', 'favors', 'cakes'];


var itemCategory;

var classicArray = [];
var modernArray  = [];
var shabbyArray  = [];
var glamArray = [];

$(document).ready(function() {
  console.log('ready');


  function categoryClass() {
    //define itemCategory

    $('.category').empty();

    //remove all classes except .category
    $('.category').attr('class', 'category');

    //add the itemCategory class to .category
    $('.category').addClass(itemCategory);

    //test if you just added .shoes or .dresses
    if ($('.category').hasClass('dresses') || $('.category').hasClass('shoes')) {
      console.log("vertical layout")
    $('.category').addClass('portrait');
  }
}


function callCategory() {

   categoryClass();

   console.log(itemCategory)

//this was var options
  var personalityTypes = {
      'classic' : '_classic',
      'modern'  : '_modern',
      'shabby'  : '_shabby',
      'glam'    : '_glam'
  };

    var classic = personalityTypes.classic;
    var modern  = personalityTypes.modern;
    var shabby  = personalityTypes.shabby;
    var glam    = personalityTypes.glam;

    $('.category').append('<form></form>');
  
    $('.category form').append('<label><img src="images/' + itemCategory + classic + '.jpg"/><input type="radio" name="' + itemCategory + '" value="classic"></label>'); 
    $('.category form').append('<label><img src="images/' + itemCategory + modern + '.jpg"/><input type="radio" name="' + itemCategory + '" value="modern"></label>');
    $('.category form').append('<label><img src="images/' + itemCategory + shabby + '.jpg"/><input type="radio" name="' + itemCategory + '" value="shabby"></label>');
    $('.category form').append('<label><img src="images/' + itemCategory + glam + '.jpg"/><input type="radio" name="' + itemCategory + '" value="glam"></label>');
    $('.category form').append('<input class="submit" type="submit" value="Submit">')
  }

  // category navigation
   $('.category').on('click', '.submit', function() {
   console.log('nav item clicked');

    itemCategory = categoryArray [0]  
    console.log(itemCategory)

  
  callCategory();
  
  });

// option selection
  $('.category').on('click', 'img', function() {
  console.log('image');
  
  $('.category img').removeClass('checked')
  $(this).addClass('checked')
  })

});

//form submission
  $('.category').on('submit', 'form', function(e) {
    e.preventDefault();
    console.log('submit');
});

//     var selectedOption = $('.checked').next('input').val();
    
//     console.log(selectedOption);

// if (selectedOption === "classic") {
//       console.log('classic value');
//       classicArray.push('1');
//       console.log(classicArray);
//     }
//     else if (selectedOption === "modern") {
//       console.log('modern value');
//       modernArray.push('1');
//       console.log(modernArray);
//     }
//     else if (selectedOption === "shabby") {
//       console.log('shabby value');
//       shabbyArray.push('1');
//       console.log(shabbyArray);
//     }
//     else if (selectedOption === "glam") {
//       console.log('glam value');
//       glamArray.push('1');
//       console.log(glamArray);
//       }

// var categoryArray = ['classis', 'modern', 'shabby', 'glam'];
//   categoryArray.length;
//   console.log(categoryArray);



//   if (categoryArray = );

//   else if ( 'classic'.length > 'modern'.length && 'classic'.length > 'shabby'.length && 'classic'.length > 'glam'.length) 
//     console.log('classicArray');

//   else if ( 'modern'.length > 'classic'.length && 'modern'.length > 'shabby'.length && 'modern'.length > 'glam'.length) 
//     console.log('modernArray');

//   else if ( 'shabby'.length > 'modern'.length && 'shabby'.length > 'classic'.length && 'shabby'.length > 'glam'.length) 
//     console.log('shabbyArray');

//   else if ( 'glam'.length > 'modern'.length && 'glam'.length > 'classic'.length && 'glam'.length > 'shabby'.length) 
//     console.log('glamArray');


//   });

// // results
// // };

// });




























