// None of this is production-quality. Do not use for production. Use as inspiration and guidance for yours.
// None of this is production-quality. Do not use for production. Use as inspiration and guidance for yours.
// None of this is production-quality. Do not use for production. Use as inspiration and guidance for yours.
// None of this is production-quality. Do not use for production. Use as inspiration and guidance for yours.
// None of this is production-quality. Do not use for production. Use as inspiration and guidance for yours.
// None of this is production-quality. Do not use for production. Use as inspiration and guidance for yours.
// None of this is production-quality. Do not use for production. Use as inspiration and guidance for yours.

var whiteout__show = document.querySelectorAll('[data-behavior~="whiteout-show"]');
var whiteout__dismiss = document.querySelectorAll('[data-behavior~="whiteout-dismiss"]');


// Utility method to loop thru NodeList correctly
var whiteout__forEach = function (array, callback, scope) {
  for (var i = 0; i < array.length; i++) {
    callback.call(scope, i, array[i]); // passes back stuff we need
  }
};

// iterate thru trigger elements and set click handler
whiteout__forEach(whiteout__show, function (index, value) {
  var _el = value;
  _el.addEventListener('click', function(e){
    var _whiteout = document.getElementById('fsa-whiteout');
    _whiteout.setAttribute('aria-hidden', 'false');
    _whiteout.setAttribute('aria-expanded', 'false');
  }, false);
});

whiteout__forEach(whiteout__dismiss, function (index, value) {
  var _el = value;
  _el.addEventListener('click', function(e){
    var _whiteout = document.getElementById('fsa-whiteout');
    _whiteout.setAttribute('aria-hidden', 'true');
    _whiteout.setAttribute('aria-expanded', 'true');
  }, false);
});

console.log('WhiteoutComponent loaded, its JS is NOT to be used for Production, demo purposes only');
