$(document).ready(function() {
  console.log('ready');

  var itemCategory;

    var classicArray = [];
    var modernArray  = [];
    var shabbyArray  = [];
    var glamArray = [];

  function callCategory() {
      console.log(itemCategory)

  var options = {
      'classic' : '_classic',
      'modern'  : '_modern',
      'shabby'  : '_shabby',
      'glam'    : '_glam'
  };

    var classic = options.classic;
    var modern  = options.modern;
    var shabby  = options.shabby;
    var glam    = options.glam;


    $('.category').append('<form></form>');
  
    $('.category form').append('<label><img src="images/' + itemCategory + classic + '.jpg"/><input type="radio" name="' + itemCategory + '" value="classic"></label>'); 
    $('.category form').append('<label><img src="images/' + itemCategory + modern + '.jpg"/><input type="radio" name="' + itemCategory + '" value="modern"></label>');
    $('.category form').append('<label><img src="images/' + itemCategory + shabby + '.jpg"/><input type="radio" name="' + itemCategory + '" value="shabby"></label>');
    $('.category form').append('<label><img src="images/' + itemCategory + glam + '.jpg"/><input type="radio" name="' + itemCategory + '" value="glam"></label>');
    $('.category form').append('<input class="submit" type="submit" value="Submit">')
  }


  // category navigation
   $('nav').on('click', 'a', function() {
   console.log('nav item clicked');

    itemCategory = $(this).text().toLowerCase();
    
    console.log(itemCategory)

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
  
  callCategory();
  
  });

// option selection
  $('.category').on('click', 'img', function() {
    console.log('image');
    $('.category img').removeClass('checked')
    $(this).addClass('checked')
  })



//form submission
  $('.category').on('submit', 'form', function(e) {
    e.preventDefault();
    console.log('submit');

    var selectedOption = $('.checked').next('input').val();
    
    console.log(selectedOption);

if (selectedOption === "classic") {
      console.log('classic value');
      classicArray.push('1');
      console.log(classicArray);
    }
    else if (selectedOption === "modern") {
      console.log('modern value');
      modernArray.push('1');
      console.log(modernArray);
    }
    else if (selectedOption === "shabby") {
      console.log('shabby value');
      shabbyArray.push('1');
      console.log(shabbyArray);
    }
    else if (selectedOption === "glam") {
      console.log('glam value');
      glamArray.push('1');
      console.log(glamArray);
      }

var propertyArray = ['dresses', 'rings', 'ceremony', 'shoes', 'flowers', 'details', 'favors', 'cake'];
  propertyArray.length;

for (var propertyArray = 0;; propertyArray++) {
  console.log(propertyArray);
  if (propertyArray < 8) break;

  else if ( 'classic'.length > 'modern'.length && 'classic'.length > 'shabby'.length && 'classic'.length > 'glam'.length) 
    console.log(classicArray);

  else if ( 'classic'.length > 'modern'.length && 'classic'.length > 'shabby'.length && 'classic'.length > 'glam'.length) 
    console.log(classicArray);
  }
     // $('.category').empty();
  
  });

// results
// };

});




























