var categoryArray = ['start quiz', 'dresses', 'rings', 'ceremony', 'shoes', 'flowers', 'details', 'favors', 'cake'];

var itemCategory;
var result;

var classicArray = [];
var modernArray  = [];
var shabbyArray  = [];
var glamArray = [];


$(document).ready(function() {
  console.log('ready');

  $('body').addClass('pink');

  function categoryClass() {
    //define itemCategory

    $('.category').empty();

    //remove all classes except .category
    $('.category').attr('class', 'category');

    //add the itemCategory class to .category
    $('.category').addClass(itemCategory);

    //test if you just added .shoes or .dresses
    if ($('.category').hasClass('dresses') || $('.category').hasClass('shoes')) {
       $('.category').addClass('portrait');
    }
  }
  // $('body').addClass('quiz-color').removeClass('pink');

  function callCategory() {

    categoryClass();

    console.log(itemCategory)

    //this var options
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
    $('.category form').append('<input class="submit" type="submit" value="Submit">');
   }


function callResult() {
  $('.category').append('<h2>' + result + 'wedding</h2>')
}

  // category navigation
   $('.category').on('click', '.submit', function(e) {
    console.log('nav item clicked');
    e.preventDefault();

    categoryArray.shift();

    itemCategory = categoryArray[0];

    console.log(itemCategory)

    //this runs on form submission
    var selectedOption = $('.checked').next('input').val();

    console.log(selectedOption);

    if (selectedOption === "classic") {
      console.log('classic' + 'classic value');
      classicArray.push('1');
      //console.log(classicArray);
    }
    else if (selectedOption === "modern") {
      console.log('modern' + 'modern value');
      modernArray.push('1');
      //console.log(modernArray);
    }
    else if (selectedOption === "shabby") {
      console.log('shabby' + 'shabby value');
      shabbyArray.push('1');
      console.log(shabbyArray);
    }
    else if (selectedOption === "glam") {
      console.log('glam' + 'glam value');
      glamArray.push('1');
      //console.log(glamArray);
    }

    console.log(classicArray);
    console.log(modernArray);
    console.log(shabbyArray);
    console.log(glamArray);


  if (categoryArray.length == 0) {
    console.log('results');
    $('.category').empty();


    if ( classicArray.length >= modernArray.length && classicArray.length >= glamArray.length && classicArray.length >= glamArray.length) {
      console.log('classicArray');
      result = "classic"
      callResult();
      
    }
    else if ( modernArray.length >= classicArray.length && modernArray.length >= glamArray.length && modernArray.length >= glamArray.length) {
      console.log('modernArray');
      result = "modern"
      callResult();
    }
    else if ( shabbyArray.length >= modernArray.length && shabbyArray.length >= classicArray.length && shabbyArray.length >= glamArray.length) {
      console.log('shabbyArray');
      result = "shabby"
    }
    else if ( glamArray.length >= modernArray.length && glamArray.length >= classicArray.length && glamArray.length >= shabbyArray.length) {
      console.log('glamArray');
      result = "glam"
      callResult();
      }
    }
    else { 
      callCategory();
    }
  });

  // option selection
  $('.category').on('click', 'img', function() {
    $('.category img').removeClass('checked')
    $(this).addClass('checked')
  });


// this code should determine the results

//var resultsArray = [classic, modern, shabby, glam]

});


























