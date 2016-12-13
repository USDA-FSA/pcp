function hasNumbers(t) {
  return /\d/.test(t);
}

// Yes, not DRY enough, refactor some day if totally fee like it,
// but probably won't because throwaway prototype. sue me.

$('body').on('blur', '[data-behavior~="validate-commodity"]', function(event) {

  var $self = $(this);
  var $component = $self.closest('.fsa-field');

  if ($self.val() == '') {
    $component.addClass('fsa-field--error');
  } else {
    $component.removeClass('fsa-field--error');
  }

})

$('body').on('blur', '[data-behavior~="validate-abbr"]', function(event) {

  var $self = $(this);
  var $component = $self.closest('.fsa-field');

  $self.val($self.val().toUpperCase()); // a bit inceptiony, no?

  if (hasNumbers($self.val())) {
    $component.addClass('fsa-field--error');
  } else {
    $component.removeClass('fsa-field--error');
  }

})

$('body').on('click', '[data-behavior~="growl-dismiss"]', function(event) {
  var $self = $(this);
  var $component = $self.closest('.pcp-growl');
  $component.addClass('pcp-growl--dismissing');
  setTimeout(function() {
    $component.remove();
  }, 230);
})

$('body').on('click', '[data-behavior~="whiteout-dismiss"]', function(event) {
  $('#pcp-whiteout').remove();
})

$('body').on('change', '[data-behavior~="select-multi-all"]', function(event) {

  var $self = $(this);
  var $component = $self.closest('.pcp-select-multi');
  var $checks = $component.find('.pcp-select-multi__check');

  if($self.is(':checked')) {
    $checks.prop('checked', true);
  } else {
    $checks.prop('checked', false);
  }

})
