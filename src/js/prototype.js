// None of this is production-quality.
// None of this is production-quality.
// None of this is production-quality.
// None of this is production-quality.
// None of this is production-quality.
// None of this is production-quality.
// None of this is production-quality.
// None of this is production-quality.
// None of this is production-quality.
// None of this is production-quality.
// None of this is production-quality.
// None of this is production-quality.
// None of this is production-quality.
// None of this is production-quality.
// None of this is production-quality.
// None of this is production-quality.
// None of this is production-quality.
// None of this is production-quality.
// None of this is production-quality.
// None of this is production-quality.
// None of this is production-quality.
// None of this is production-quality.
// None of this is production-quality.
// None of this is production-quality.
// None of this is production-quality.
// None of this is production-quality.
// None of this is production-quality.
// None of this is production-quality.
// None of this is production-quality.
// None of this is production-quality.

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

$('body').on('click', '[data-behavior~="growl-show"]', function(event) {

  var $self = $(this);
  var $target = $('#' + $self.attr('data-target'));

  console.log('showing ' + $self.attr('data-target'));

  $target
    .removeClass('pcp-growl--hidden')
    .closest('.pcp-growl-container--hidden')
    .removeClass('pcp-growl-container--hidden')
  ;

  $target.removeClass('pcp-growl--hidden');

})

$('body').on('click', '[data-behavior~="growl-dismiss"]', function(event) {
  var $self = $(this);
  var $component = $self.closest('.pcp-growl');
  $component.addClass('pcp-growl--dismissing');
  setTimeout(function() {
    $component.removeClass('pcp-growl--dismissing');
    $component.addClass('pcp-growl--hidden');
  }, 230);
})

$('body').on('click', '[data-behavior~="growl-dismiss-delay"]', function(event) {

  var $self = $(this);
  var $target = $('#' + $self.attr('data-target'));

  setTimeout(function() {
    $target.addClass('pcp-growl--dismissing');

    setTimeout(function() {
      $target.removeClass('pcp-growl--dismissing');
      $target.addClass('pcp-growl--hidden');
    }, 500);

  }, 3500);

})

$('body').on('click', '[data-behavior~="whiteout-dismiss"]', function(event) {
  $('#pcp-whiteout').addClass('pcp-whiteout--hidden');
})

$('body').on('click', '[data-behavior~="popover-dismiss"]', function(event) {
  var $self = $(this);
  var $component = $self.closest('.pcp-popover');
  $component.removeClass('pcp-popover--visible');
})

$('body').on('click', '[data-behavior~="whiteout-show"]', function(event) {
  $('#pcp-whiteout').removeClass('pcp-whiteout--hidden');
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

function pcpDemoHighlightText(target) {

  var $target = $('#' + target);

  $target.addClass('pcp-highlight-text');

  $target.on('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e) {
    $target.removeClass('pcp-highlight-text');
  });

}

function pcpDemoMarker(target, className) {

  var $target = $('#' + target);

  $target.removeClass('pcp-marker--high pcp-marker--low');
  $target.addClass(className);

}

function pcpDemoMarkerModified(target) {

  var $target = $('#' + target);

  $target.toggleClass('pcp-marker--modified');

}

function pcpDemoDominantInteriorSwap(market_1, market_1_val, market_2, market_2_val) {

  var $market_1 = $('#' + market_1_val);
  var $market_1_text = $market_1.text();
  var $market_1_val = $('#' + market_1);
  var $market_1_val_text = $('#' + market_1).text();

  var $market_2 = $('#' + market_2_val);
  var $market_2_text = $market_2.text();
  var $market_2_val = $('#' + market_2);
  var $market_2_val_text = $market_2_val.text();

  var $titleSecondMarketLameVariableNameSorryNotSorry = $('#UNIQUE-ID-999999');

  console.log($market_1_text + ": " + $market_1_val_text + "\n" + $market_2_text + ": " + $market_2_val_text);

  pcpDemoHighlightText('UNIQUE-ID-09524');
  pcpDemoHighlightText('UNIQUE-ID-74851');

  $market_1.removeClass('pcp-rift-detail__swapped--up');
  $market_1_val.removeClass('pcp-rift-detail__swapped--up');

  $market_2.removeClass('pcp-rift-detail__swapped--down');
  $market_2_val.removeClass('pcp-rift-detail__swapped--down');

  $titleSecondMarketLameVariableNameSorryNotSorry
    .text($market_2_text)
    .addClass('pcp-highlight-text pcp-highlight-text--inverse')
    .on('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e) {
      $(this).removeClass('pcp-highlight-text pcp-highlight-text--inverse');
    });
  ;

  $market_2_val.on('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e) {

    $market_1.text($market_2_text);
    $market_2.text($market_1_text);
    $market_1_val.text($market_2_val_text);
    $market_2_val.text($market_1_val_text);

    $market_1.addClass('pcp-rift-detail__swapped--up');
    $market_1_val.addClass('pcp-rift-detail__swapped--up');

    $market_2.addClass('pcp-rift-detail__swapped--down');
    $market_2_val.addClass('pcp-rift-detail__swapped--down');


  });

}

$('body').on('click', '[data-behavior~="DEMO-MAP-RIFT-DETAILS"]', function(event) {

  var $self = $(this);
  var $target = $('#' + $self.attr('data-target'));

  if ($self.hasClass('pcp-marker--active')) {

    $self.removeClass('pcp-marker--active');
    $target.removeClass('pcp-mapping__rift-detail--visible');

  } else {

    $('.pcp-marker--active').removeClass('pcp-marker--active');
    $('.pcp-mapping__rift-detail--visible').removeClass('pcp-mapping__rift-detail--visible');

    $self.addClass('pcp-marker--active');
    $target.addClass('pcp-mapping__rift-detail--visible');

  }

})

$('body').on('click', '[data-behavior~="DEMO-CLOSE-RIFT-DETAILS"]', function(event) {

  $('.pcp-marker--active').removeClass('pcp-marker--active');
  $('.pcp-mapping__rift-detail--visible').removeClass('pcp-mapping__rift-detail--visible');

})

$('body').on('click', '[data-behavior~="DEMO-PIN-RIFT-DETAILS"]', function(event) {

  $self = $(this);
  $component = $self.closest('.pcp-rift-detail')
  $componentFramed = $self.closest('.pcp-mapping__rift-detail')

  if ($component.hasClass('pcp-rift-detail--pinned')) {
    $component.removeClass('pcp-rift-detail--pinned');
    $componentFramed.removeAttr('style');
  } else {
    $component.addClass('pcp-rift-detail--pinned')
    $componentFramed.css('bottom', '0');
  }

})

$('body').on('click', '[data-behavior~="fullscreen-toggle"]', function(event) {

  $self = $(this);
  $component = $self.closest('.pcp-mapping');

  $self.toggleClass('pcp-mapping__zoom--toggled');
  $component.toggleClass('pcp-mapping--fullscreen');

})

$('body').on('click', '[data-behavior~="panel-toggle"]', function(event) {

  $self = $(this);
  $component = $self.closest('.pcp-mapping__panel');

  $self.toggleClass('pcp-mapping__panel-btn--toggled');
  $component.toggleClass('pcp-mapping__panel--visible');

})

$('body').on('click', '[data-behavior~="spinbox"]', function(event) {

  $self = $(this);
  $component = $self.closest('.pcp-spinbox');
  $target = $component.find('.pcp-spinbox__input');

  currentValue = parseFloat($target.val());
  stepAmt = parseFloat($target.attr('step'));

  console.log('"currentValue" is ' + currentValue + ' and "stepAmt" is ' + stepAmt);

  // It better be  a valid number. I didn't get around do doing this
  // if (isNaN(number)){
  //   ...
  // }

  if ($self.hasClass('pcp-spinbox__btn--increment')) {
    $target.val(currentValue + stepAmt);
  } else {
    $target.val(currentValue - stepAmt);
  }

})

$('body').on('focus', '.pcp-spinbox__input', function(event) {

  var $self = $(this);
  var $component = $self.closest('.pcp-adjust__spinbox');

  $component.addClass('pcp-adjust__spinbox--focused');

  console.log('spinbox focused');

})

$('body').on('keydown', '.pcp-spinbox__input[data-behavior~="spinbox-kill-keypress"]', function(e) {

  if (event.which == 39) {
    console.log('You pressed RIGHT arrow key');
  } else if (event.which == 37) {
    console.log('You pressed LEFT arrow key');
  } else if (event.which == 38) {
    console.log('You pressed UP arrow key');
  } else if (event.which == 40) {
    console.log('You pressed DOWN arrow key');
  } else if (event.which == 9) {
    console.log('You pressed TAB key');
  } else {
    e.preventDefault();
  }

})

$('body').on('blur', '.pcp-spinbox__input, .pcp-spinbox__btn', function(event) {

  var $self = $(this);
  var $component = $self.closest('.pcp-adjust__spinbox');
  var $spinButtons = $component.find('.pcp-spinbox__btn');

  // This use of setTimeoutis definitely a hack, you'll want to make it smarter.
  setTimeout(function() {
    if ($spinButtons.is(':focus')) {
      $component.addClass('pcp-adjust__spinbox--focused');
    }
    else {
      $component.removeClass('pcp-adjust__spinbox--focused');
    }
  }, 10);

})

$('body').on('change', '[data-behavior~="spinbox-demo-change"]', function() {

  var $self = $(this);
  thisAmt = parseFloat($self.val());

  if (thisAmt == '0') {
    $self.val('0.00');
  }

});

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

$('.pcp-mapping__panel-bd-scroll-item--top').resizable({
  handleSelector: '.pcp-mapping__panel-bd--splitter',
  resizeWidth: false
});

$('.pcp-mapping__panel').resizable({
  handleSelector: '.pcp-mapping__panel-splitter',
  resizeHeight: false
});

$('body').on('dblclick', '.pcp-mapping__panel-splitter', function(event) {
  // REVERT panel to initial width
  $('.pcp-mapping__panel').css('width', '');
})

$('body').on('dblclick', '.pcp-mapping__panel-bd--splitter', function(event) {
  // REVERT adjustment panes to initial height
  $('.pcp-mapping__panel-bd-scroll-item--top').css('height', '');
})
