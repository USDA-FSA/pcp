// None of this is production-quality. Do not use for production. Use as inspiration and guidance for yours.
// None of this is production-quality. Do not use for production. Use as inspiration and guidance for yours.
// None of this is production-quality. Do not use for production. Use as inspiration and guidance for yours.
// None of this is production-quality. Do not use for production. Use as inspiration and guidance for yours.
// None of this is production-quality. Do not use for production. Use as inspiration and guidance for yours.
// None of this is production-quality. Do not use for production. Use as inspiration and guidance for yours.
// None of this is production-quality. Do not use for production. Use as inspiration and guidance for yours.
// None of this is production-quality. Do not use for production. Use as inspiration and guidance for yours.
// None of this is production-quality. Do not use for production. Use as inspiration and guidance for yours.
// None of this is production-quality. Do not use for production. Use as inspiration and guidance for yours.
// None of this is production-quality. Do not use for production. Use as inspiration and guidance for yours.
// None of this is production-quality. Do not use for production. Use as inspiration and guidance for yours.
// None of this is production-quality. Do not use for production. Use as inspiration and guidance for yours.
// None of this is production-quality. Do not use for production. Use as inspiration and guidance for yours.
// None of this is production-quality. Do not use for production. Use as inspiration and guidance for yours.
// None of this is production-quality. Do not use for production. Use as inspiration and guidance for yours.
// None of this is production-quality. Do not use for production. Use as inspiration and guidance for yours.
// None of this is production-quality. Do not use for production. Use as inspiration and guidance for yours.
// None of this is production-quality. Do not use for production. Use as inspiration and guidance for yours.
// None of this is production-quality. Do not use for production. Use as inspiration and guidance for yours.
// None of this is production-quality. Do not use for production. Use as inspiration and guidance for yours.
// None of this is production-quality. Do not use for production. Use as inspiration and guidance for yours.
// None of this is production-quality. Do not use for production. Use as inspiration and guidance for yours.
// None of this is production-quality. Do not use for production. Use as inspiration and guidance for yours.
// None of this is production-quality. Do not use for production. Use as inspiration and guidance for yours.
// None of this is production-quality. Do not use for production. Use as inspiration and guidance for yours.
// None of this is production-quality. Do not use for production. Use as inspiration and guidance for yours.
// None of this is production-quality. Do not use for production. Use as inspiration and guidance for yours.
// None of this is production-quality. Do not use for production. Use as inspiration and guidance for yours.
// None of this is production-quality. Do not use for production. Use as inspiration and guidance for yours.

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

$('body').on('click', '[data-behavior~="button-to-disable"]', function(event) {

  var $self = $(this);
  $self.attr('disabled', true);

})

$('body').on('change', '[data-behavior~="modified-form"]', function(event) {

  var $self = $(this);
  var $component = $self.closest('[data-component~="modified-form-target"]');
  var $buttons = $component.find('[data-behavior~="button-to-disable"]')

  $buttons.removeAttr('disabled');

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

$('body').on('click', '[data-behavior~="open-modal"]', function(event) {

  var $self = $(this)
  var $target = $('#' + $self.attr('data-target'));

  $self.attr('data-modal-origin','');

  $target
    .addClass('pcp-modal--active')
    .attr('aria-hidden','false')
  ;

  setTimeout(function() {
    $target.focus();
  }, 200);

  return false;

})

$('body').on('click', '[data-behavior~="close-modal"]', function(event) {

  var $self = $(this)
  var $component = $self.closest('.pcp-modal')
  var $origin = $('body').find('[data-modal-origin]');

  $component
    .removeClass('pcp-modal--active')
    .attr('aria-hidden','true')
  ;

  $origin
    .focus()
    .removeAttr('data-modal-origin')
  ;

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

$('body').on('click', '[data-behavior~="DEMO-FAKING-TAB-CONTENT-SWAP"]', function(event) {

  var $self = $(this);
  var $component = $self.closest('.pcp-content-tabs');
  var $target = $($self.attr('href'));
  var $selfPeers = $component.find('.pcp-content-tabs__label');
  var $targetPeers = $target.siblings('.PCP-TAB-CONTENT-DONT-USE-THESE-STYLES-IN-PRODUCTION__ITEM');

  $selfPeers.removeClass('pcp-content-tabs__label--active');
  $self.addClass('pcp-content-tabs__label--active');
  $target.addClass('PCP-TAB-CONTENT-DONT-USE-THESE-STYLES-IN-PRODUCTION__ITEM--ACTIVE');
  $targetPeers.removeClass('PCP-TAB-CONTENT-DONT-USE-THESE-STYLES-IN-PRODUCTION__ITEM--ACTIVE');

  return false;

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

  if ($self.hasClass('pcp-spinbox__btn--increment')) {
    newAdjAmt = currentValue + stepAmt;
    $target.val(newAdjAmt.toFixed(2)).trigger('change');
  } else { // pcp-spinbox__btn--decrement
    newAdjAmt = currentValue - stepAmt;
    $target.val(newAdjAmt.toFixed(2)).trigger('change');
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

$('body').on('change', '[data-behavior~="spinbox-demo-change"]', function(event) {

  // ---------------------------------------------------------------------------
  var $self = $(this);
  var $row = $self.closest('tr');

  // ---------------------------------------------------------------------------
  currentChg = $row.find('.pcp-adjust__change-value');
  stepAmt = parseFloat($self.attr('step'));
  currentChgAmt = parseFloat(currentChg.html());

  if ($.isNumeric(currentChgAmt)) {
    newChgAmt = currentChgAmt + stepAmt;
  } else {
    newChgAmt = 0 + stepAmt;
  }

  if (newChgAmt == '0') {
    currentChg.html('');
  } else {
    currentChg.html(newChgAmt.toFixed(2));
  }

  // ---------------------------------------------------------------------------
  thisAmt = parseFloat($self.val()).toFixed(2);

  if ($.isNumeric(thisAmt)) {
    $self.val(thisAmt);
    console.log('yup, IS a number');
  } else {
    $self.val('0.00');
    console.log('nope, NOT a number');
  }

});

$('body').on('change', '[data-behavior~="mark-complete"]', function(event) {

  // ---------------------------------------------------------------------------
  var $self = $(this);
  var $scope = $(this).closest('.pcp-modal');
  var $target = $scope.find('[data-complete-target]');
  var $targetDisable  = $target.find('.pcp-spinbox__btn, .fsa-radio, .fsa-checkbox, .pcp-file-upload__input, .pcp-file-upload__clear');
  var $targetReadonly = $target.find('.fsa-input');

  if ($targetDisable.is(':disabled')) {
    $targetDisable.removeAttr('disabled');
  } else {
    $targetDisable.attr('disabled', true);
  }

  if ($targetReadonly.is('[readonly]')) {
    $targetReadonly.removeAttr('readonly');
  } else {
    $targetReadonly.attr('readonly', true);
  }

});

$('body').on('change', '[data-behavior~="mark-adj-complete"]', function(event) {

  // ---------------------------------------------------------------------------
  var $self = $(this);
  var $scope = $(this).closest('.pcp-mapping');
  var $scopeNarrow = $scope.find('.pcp-mapping__panel-bd');
  var $targetsDisable  = $scopeNarrow.find('input, button');
  var $targetReset = $('#' + $self.attr('data-reset-target'));
  var $targetSave = $('#' + $self.attr('data-save-target'));

  if ($targetsDisable.is(':disabled')) {
    $targetsDisable.removeAttr('disabled');
    $targetReset.removeAttr('disabled');
    $targetSave.addClass('pcp-content-tabs__label--unsaved')
  } else {
    $targetReset.attr('disabled', true);
    $targetsDisable.attr('disabled', true);
    $targetSave.removeClass('pcp-content-tabs__label--unsaved');
  }

});

function handleFileSelect(evt) {

  var $self = $(this);
  var $target = $('#' + $self.attr('data-target'));
  var files = evt.target.files; // FileList object

  // use the 1st file from the list
  f = files[0];

  var reader = new FileReader();

  // Closure to capture the file information.
  reader.onload = (function(theFile) {
    return function(e) {
      $target.val(e.target.result);
    };
  })(f);

  // Read in the image file as a data URL.
  reader.readAsText(f);

}

$('body').on('change', '[data-behavior~="attach-upload"]', function(event) {

  var $self = $(this);
  var $input = this;
  var $component = $self.closest('.pcp-file-upload');
  var $target = $component.find('.pcp-file-upload__attachment');

  var filepath = $input.value;
  var filematch = filepath.match(/([^\/\\]+)$/);
  var filename = filematch[1];

  $target.html(filename);

});

if (document.querySelector('[data-behavior~="attach-upload"]')) {
  document.querySelector('[data-behavior~="attach-upload"]').addEventListener('change', handleFileSelect, false);
}

$('body').on('change', '[data-behavior~="use-current-or-new"]', function(event) {

  var $self = $(this);
  var $which = $self.val();
  var $target = $('#' + $self.attr('data-target'));
  var $targetCurrent = $('#' + $self.attr('data-target') + '__current');
  var $targetNew = $('#' + $self.attr('data-target') + '__new');

  if ($which == 'new') {
    $target.removeAttr('hidden');
    $targetNew.removeAttr('hidden');
    $targetCurrent.attr('hidden', true);
  } else {
    $target.attr('hidden', true);
    $targetCurrent.removeAttr('hidden');
    $targetNew.attr('hidden', true);
  }

});

$('body').on('click', '[data-behavior~="attach-upload__clear"]', function(event) {

  var $self = $(this);
  var $target = $self.siblings('.pcp-file-upload__attachment');
  var $targetPreview = $('#' + $self.attr('data-target'));

  $target.html('');
  $targetPreview.val('');

});

$('body').on('change', '[data-behavior~="choose-commodity-class"]', function(event) {

  var $self = $(this);
  var $component = $self.closest('.fsa-field');
  var $targetSubClass = $('#' + $self.attr('data-target-subclass'));
  var $targetAdder = $('#' + $self.attr('data-target-adder'));
  var selectedValue = $self.val();

  console.log(selectedValue);

  if (selectedValue == 'Durum') {
    $targetSubClass.removeAttr('hidden');
    $targetAdder.attr('hidden', true);
  } else if (selectedValue == 'Add') {
    $targetSubClass.attr('hidden', true);
    $targetAdder.removeAttr('hidden');
    $targetAdder.find('.fsa-input').focus();
    $component.attr('hidden', true);
  } else {
    $targetAdder.attr('hidden', true);
    $targetSubClass.attr('hidden', true);
  }

});

$('body').on('click', '[data-behavior~="choose-commodity-class__reset"]', function(event) {

  var $self = $(this);
  var $component = $self.closest('.fsa-field');
  var $target = $('#' + $self.attr('data-target'));
  var $targetSelect = $target.find('.fsa-field__item')
  var $textField = $component.find('.fsa-field__item')

  $textField.val('');
  $component.attr('hidden', true);
  $target.removeAttr('hidden');
  $targetSelect
    .val('None')
    .focus()
  ;

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

$('.pcp-mapping__panel-bd-scroll-item--middle').resizable({
  handleSelector: '.pcp-mapping__panel-bd--splitter-middle',
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
