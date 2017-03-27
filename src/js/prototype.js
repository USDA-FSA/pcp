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

$('body').on('click', '[data-behavior~="popover-dismiss"]', function(event) {
  var $self = $(this);
  var $component = $self.closest('.pcp-popover');
  $component.removeClass('pcp-popover--visible');
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

$('body').on('click', '[data-behavior~="toggle-popover"]', function(event) {

  var $self = $(this);
  var $component = $self.closest('.fsa-field');
  var $target = $('#' + $self.attr('data-target'));
  var $targetPeers = $('.pcp-popover');

  if ($target.hasClass('pcp-popover--visible')) {
    $targetPeers.removeClass('pcp-popover--visible');
    $target.removeClass('pcp-popover--visible');
  } else {
    $targetPeers.removeClass('pcp-popover--visible');
    $target.addClass('pcp-popover--visible');
  }

})

$('body').on('click', '[data-behavior~="rift-pin"]', function(event) {

  alert('Pin this!')

})

$('body').on('click', '[data-behavior~="rift-close"]', function(event) {

  alert('Close this!')

})

function pcpHighlightText(target) {

  var $target = $('#' + target);

  $target.addClass('pcp-highlight-text');

  setTimeout(function() {
    $target.removeClass('pcp-highlight-text');
  }, 2000);


}


function markerDemoMarkup() {

  var $source = $('#pcp-marker-demo__target');
  var $target = $('#pcp-marker-demo__markup');

  var $sourceContent = $source.parent().html();

  // far too lazy and repetitive, but i don't feel like DRYing this.
  // Doesn't lend itself to reuse, so it's specific to the Marker Combinator
  $sourceContent = $sourceContent.replace(new RegExp('<','g'), '&lt;');
  $sourceContent = $sourceContent.replace(new RegExp('>','g'), '&gt;');
  $sourceContent = $sourceContent.replace(new RegExp('                ','g'), '');
  $sourceContent = $sourceContent.replace(' id="pcp-marker-demo__target"', '');
  $sourceContent = $sourceContent.replace(' pcp-marker--barFoo', '');
  $sourceContent = $sourceContent.replace(' pcp-marker--fooBar', '');
  $sourceContent = $sourceContent.replace(' pcp-marker--loremIpsum', '');
  $sourceContent = $sourceContent.replace(' style="position: absolute; left: 210px; top: 100px;"', '');
  $sourceContent = $sourceContent.replace(' none', '');

  $sourceContent = $sourceContent.replace(' pcp-marker--modified', ' <strong style="color:black;">pcp-marker--modified</strong>');
  $sourceContent = $sourceContent.replace(' pcp-marker--low', ' <strong style="color:black;">pcp-marker--low</strong>');
  $sourceContent = $sourceContent.replace(' pcp-marker--active', ' <strong style="color:black;">pcp-marker--active</strong>');
  $sourceContent = $sourceContent.replace(' pcp-marker--impacted', ' <strong style="color:black;">pcp-marker--impacted</strong>');
  $sourceContent = $sourceContent.replace(' pcp-marker--high', ' <strong style="color:black;">pcp-marker--high</strong>');

  $target.html($sourceContent);

  $target.parent().removeClass('pcp-code-block--hidden');

}

function markerDemo() {
  $('body').on('change', '[data-behavior~="markerDemo"]', function() {

    var $self = $(this);
    var $target = $('#pcp-marker-demo__target');

    $target
      .removeClass($self.attr('data-marker-other'))
      .addClass($self.val())
    ;

    markerDemoMarkup();

  });
}

markerDemo();
