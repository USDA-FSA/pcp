$('body').on('blur', '[data-behavior~="validate-commodity"]', function(event) {

  var $self = $(this);
  var $component = $self.closest('.fsa-field');

  if ($self.val() == '') {
    $component.addClass('fsa-field--error')
  } else {
    $component.removeClass('fsa-field--error')
  }

})

$('body').on('blur', '[data-behavior~="validate-abbr"]', function(event) {

  var $self = $(this);
  var $component = $self.closest('.fsa-field');

  if ($.isNumeric('$self')) {
    $component.addClass('fsa-field--error')
  } else {
    $component.removeClass('fsa-field--error')
  }

})
