var categoryArray = ['start quiz', 'dresses', 'rings', 'ceremony', 'shoes', 'flowers', 'details', 'favors', 'cake'];


// var resultsImages = {
//   'dresses' : [
//     'dress1.jpg',
//     'dress2.jpg',
//     'dress3.jpg',
//     'dress4.jpg',
//   ]
//   'rings': [
//     'rings1.jpg',
//     'rings2.jpg',
//     'rings3.jpg',
//     'rings4.jpg',
//   ]  
//   'ceremony': [
//     'ceremony1.jpg',
//     'ceremony2.jpg',
//     'ceremony3.jpg',
//     'ceremony4.jpg',
//   ]
//   'shoes': [
//     'shoes1.jpg',
//     'shoes2.jpg',
//     'shoes3.jpg',
//     'shoes4.jpg',
//   ]
//   'flowers': [
//     'flowers1.jpg',
//     'flowers2.jpg',
//     'flowers3.jpg',
//     'flowers4.jpg',
//   ]
//   'details': [
//     'details1.jpg',
//     'details2.jpg',
//     'details3.jpg',
//     'details4.jpg',
//   ]
//   'favors': [
//     'favors.1',
//     'favors2.jpg',
//     'favors3.jpg',
//     'favors4.jpg',
//   ]
//   'cake': [
//     'cake1.jpg',
//     'cake2.jpg',
//     'cake3.jpg',
//     'cake4.jpg',
//   ]
// }

var itemCategory;
var result;

var timelessArray = [];
var modernArray  = [];
var romanticArray  = [];
var glamArray = [];


$(document).ready(function() {
  console.log('ready');

  $('body').addClass('quiz-color');
  console.log('change background color');

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

  function callCategory() {

    categoryClass();

    console.log(itemCategory)

    //this var options
    var personalityTypes = {
      'timeless' : '_timeless',
      'modern'  : '_modern',
      'romantic'  : '_romantic',
      'glam'    : '_glam'
    };

    var timeless = personalityTypes.timeless;
    var modern  = personalityTypes.modern;
    var romantic  = personalityTypes.romantic;
    var glam    = personalityTypes.glam;


    $('.category').append('<form></form>');

    $('.category form').append('<label><img src="images/' + itemCategory + timeless + '.jpg"/><input type="radio" name="' + itemCategory + '" value="timeless"></label>');
    $('.category form').append('<label><img src="images/' + itemCategory + modern + '.jpg"/><input type="radio" name="' + itemCategory + '" value="modern"></label>');
    $('.category form').append('<label><img src="images/' + itemCategory + romantic + '.jpg"/><input type="radio" name="' + itemCategory + '" value="romantic"></label>');
    $('.category form').append('<label><img src="images/' + itemCategory + glam + '.jpg"/><input type="radio" name="' + itemCategory + '" value="glam"></label>');
    $('.category form').append('<input class="submit" type="submit" value="submit" style="display:none;" disabled>');
   }


function callResult() {
  $('.category').append('<h2>' + result + '<br>Wedding</h2>')
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

    if (selectedOption === "timeless") {
      console.log('timeless' + 'timeless value');
      timelessArray.push('1');
      //console.log(timelessArray);
    }
    else if (selectedOption === "modern") {
      console.log('modern' + 'modern value');
      modernArray.push('1');
      //console.log(modernArray);
    }
    else if (selectedOption === "romantic") {
      console.log('romantic' + 'romantic value');
      romanticArray.push('1');
      console.log(romanticArray);
    }
    else if (selectedOption === "glam") {
      console.log('glam' + 'glam value');
      glamArray.push('1');
      //console.log(glamArray);
    }

    console.log(timelessArray);
    console.log(modernArray);
    console.log(romanticArray);
    console.log(glamArray);


  if (categoryArray.length == 0) {
    console.log('results');
    $('.category').empty();


    if ( timelessArray.length >= modernArray.length && timelessArray.length >= romanticArray.length && timelessArray.length >= glamArray.length) {
      console.log('timelessArray');
      result = "Timeless"
      callResult();
      
    }
    else if ( modernArray.length >= timelessArray.length && modernArray.length >= glamArray.length && modernArray.length >= romanticArray.length) {
      console.log('modernArray');
      result = "Modern"
      callResult();
    }
    else if ( romanticArray.length >= modernArray.length && romanticArray.length >= timelessArray.length && romanticArray.length >= glamArray.length) {
      console.log('romanticArray');
      result = "Romantic"
      callResult();
    }
    else if ( glamArray.length >= modernArray.length && glamArray.length >= timelessArray.length && glamArray.length >= romanticArray.length) {
      console.log('glamArray');
      result = "Glam"
      callResult();
      }
    }
    else { 
      callCategory();
    }
  });

  // option selection
  $('.category').on('click', 'img', function() {
    if($(this).hasClass('checked')) $('.submit').click();
    $('.category img').removeClass('checked')
    $(this).addClass('checked')
    $('.submit').removeAttr('disabled');

  });


// this code should determine the results

//var resultsArray = [timeless, modern, romantic, glam]

});


























