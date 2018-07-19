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

$('body').on('blur', '[data-behavior~="validate-commodity"], [data-behavior~="validate-closing"]', function(event) {

  var $self = $(this);
  var $component = $self.closest('.fsa-field');

  if ($self.val() == '') {
    $component.addClass('fsa-field--error');
  } else {
    $component.removeClass('fsa-field--error');
  }

})

$('body').on('keyup', '[data-behavior~="validate-closing"]', function(event) {

  var $self = $(this);
  var $target = $('#' + $self.attr('data-save-target'));''

  if ($self.val() == '') {
    $target.attr('disabled', true);
  }
  else {
    $target.removeAttr('disabled');
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
    .attr('aria-hidden', 'false')
    .closest('.fsa-growl-container--hidden')
    .removeClass('fsa-growl-container--hidden')
  ;

})

$('body').on('click', '[data-behavior~="growl-dismiss"]', function(event) {

  var $self = $(this);
  var $component = $self.closest('.fsa-growl');

  $component.addClass('fsa-growl--dismissing');

  $component.on('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e) {
    $component.removeClass('fsa-growl--dismissing');
    $component.attr('aria-hidden', 'true')
  });

})

$('body').on('click', '[data-behavior~="growl-dismiss-delay"]', function(event) {

  var $self = $(this);
  var $target = $('#' + $self.attr('data-target'));

  setTimeout(function() {

    $target.addClass('fsa-growl--dismissing');

    $target.on('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e) {
      $target.removeClass('fsa-growl--dismissing');
      $target.attr('aria-hidden', 'true')
    });

    // setTimeout(function() {
    // }, 500);

  }, 7500);

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

$('body').on('click', '[data-behavior~="whiteout-show"]', function(event) {
  $('#fsa-whiteout').attr('aria-hidden','false');
})

$('body').on('click', '[data-behavior~="whiteout-dismiss"]', function(event) {
  $('#fsa-whiteout').attr('aria-hidden','true');
})

$('body').on('click', '[data-behavior~="open-modal"]', function(event) {

  var $self = $(this)
  var $target = $('#' + $self.attr('data-target'));

  $self.attr('data-modal-origin','');

  $target
    .addClass('fsa-modal--active')
    .attr('aria-hidden','false')
  ;

  setTimeout(function() {
    $target.focus();
  }, 200);

  return false;

})

$('body').on('click', '[data-behavior~="close-modal"]', function(event) {

  var $self = $(this)
  var $component = $self.closest('.fsa-modal')
  var $origin = $('body').find('[data-modal-origin]');

  $component
    .removeClass('fsa-modal--active')
    .attr('aria-hidden','true')
  ;

  $origin
    .focus()
    .removeAttr('data-modal-origin')
  ;

})

$('body').on('change', '[data-behavior~="select-multi-all"]', function(event) {

  var $self = $(this);
  var $component = $self.closest('.fsa-select-multi');
  var $checks = $component.find('.fsa-select-multi__check');

  if($self.is(':checked')) {
    $checks.prop('checked', true);
  } else {
    $checks.prop('checked', false);
  }

})

function checkMultiCheck() {

  var $component = $('[data-multi-check-group]');

  $component.each(function(index) {

    var $self = $(this);

    var $checker = $self.find('[data-behavior~="multi-check"]');
    var $checks = $self.find('[data-multi-check-group__item]');

    checksAmt = $checks.length;
    checksAmtNotChecked = $checks.not(":checked").length;

    if ($checks.is(':checked')) {
      if (checksAmt === checksAmtNotChecked) {
        $checker.prop('indeterminate', false);
        $checker.prop('checked', false);
      }
      else if (checksAmtNotChecked === 0) {
        $checker.prop('indeterminate', false);
        $checker.prop('checked', true);
      }
      else {
        $checker.prop('indeterminate', true);
        $checker.prop('checked', false);
      }
    }

  });

}

checkMultiCheck();

$('body').on('change', '[data-behavior~="multi-check"]', function(event) {

  var $self = $(this);
  var $component = $self.closest('[data-multi-check-group]');
  var $checks = $component.find('[data-multi-check-group__item]');

  if($self.is(':checked')) {
    $checks.prop('checked', true);
  }
  else {
    $checks.prop('checked', false);
  }

})

$('body').on('change', '[data-behavior~="multi-check-item"]', function(event) {

  var $self = $(this);
  var $component = $self.closest('[data-multi-check-group]');
  var $parent = $component.find('[data-multi-check-group__parent]');
  var $checks = $component.find('[data-multi-check-group__item]');

  checksAmt = $checks.length;
  checksAmtNotChecked = $checks.not(":checked").length;

  console.log(checksAmtNotChecked + ' of ' + checksAmt + ' are NOT checked');

  if (checksAmt === checksAmtNotChecked) {
    $parent.prop('indeterminate', false);
    $parent.prop('checked', false);
  }
  else if (checksAmtNotChecked === 0) {
    // console.log('ALL children are checked');
    $parent.prop('indeterminate', false);
    $parent.prop('checked', true);
  }
  else {
    // console.log('SOME children are checked');
    $parent.prop('indeterminate', true);
    $parent.prop('checked', false);
  }

})

$('body').on('click', '[data-behavior~="popover-dismiss"]', function(event) {
  var $self = $(this);
  var $component = $self.closest('.pcp-popover');
  $component.removeClass('pcp-popover--visible');
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
  var $component = $self.closest('.fsa-content-tabs');
  var $target = $($self.attr('href'));
  var $selfPeers = $component.find('.fsa-content-tabs__label');
  var $targetPeers = $target.siblings('.PCP-TAB-CONTENT-DONT-USE-THESE-STYLES-IN-PRODUCTION__ITEM');

  $selfPeers.removeClass('fsa-content-tabs__label--active');
  $self.addClass('fsa-content-tabs__label--active');
  $target
    .css('opacity', '0')
    .addClass('PCP-TAB-CONTENT-DONT-USE-THESE-STYLES-IN-PRODUCTION__ITEM--ACTIVE')
    .fadeTo('slow', '1', function() {
      $(this).removeAttr('style');
    })
  ;
  $targetPeers.removeClass('PCP-TAB-CONTENT-DONT-USE-THESE-STYLES-IN-PRODUCTION__ITEM--ACTIVE');

  return false;

})

$('body').on('change', '[data-behavior~="DEMO-FAKING-SELECT-CONTENT-SWAP"]', function(event) {

  var $self = $(this);
  var $target = $('#' + $self.find(':selected').data('target'));
  var $targetPeers = $target.siblings('.PCP-TAB-CONTENT-DONT-USE-THESE-STYLES-IN-PRODUCTION__ITEM');

  $target
    .css('opacity', '0')
    .addClass('PCP-TAB-CONTENT-DONT-USE-THESE-STYLES-IN-PRODUCTION__ITEM--ACTIVE')
    .fadeTo('slow', '1', function() {
      $(this).removeAttr('style');
    })
  ;
  $targetPeers.removeClass('PCP-TAB-CONTENT-DONT-USE-THESE-STYLES-IN-PRODUCTION__ITEM--ACTIVE')

})

var windowObjectReference; // global variable

function popupCenter(url, title, w, h) {
  var left = (screen.width  / 2) - ( w / 2);
  var top = (screen.height / 2 ) - ( h / 2);
  return window.open(url, title, 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width='+w+', height='+h+', top='+top+', left='+left);
}

function pcpCustomPrint() {
  // document.addEventListener('DOMContentLoaded', this.print());
}

$('body').on('click', '[data-behavior~="new-print-window"]', function(event) {

  // USAGE:
  // <a
  //   href="workflow_mapping__print.html"
  //   data-behavior="new-print-window"
  //   data-pop-title="loremIpsum"
  //   data-pop-width="1080"
  //   data-pop-height="768"
  //   data-pop-extras=""
  // >
  //   text
  // </a>


  var $self = $(this);

  var popTitle = $self.data('pop-title');
  var popWidth = $self.data('pop-width');
  var popHeight = $self.data('pop-height');
  var popExtras = 'resizable,scrollbars,menubar=no,directories=no,location=no,toolbar=no,status=no,copyhistory=no,' + $self.data('pop-extras');
  var popLeft = (screen.width  / 2) - ( popWidth / 2);
  var popTop = (screen.height / 2 ) - ( popHeight / 2);
  var popFeatures = 'width=' + popWidth + ',height=' + popHeight + ',left=' + popLeft + ',top=' + popTop + ',' + popExtras;

  console.log('WINDOW FEATURES: ' + popFeatures);

  windowObjectReference = window.open(this.href, popTitle, popFeatures);

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
  $icon = $self.find('use');
  $componentSteppedControl = $('.fsa-stepped-control');

  $self.toggleClass('pcp-mapping__zoom--toggled');
  $component.toggleClass('pcp-mapping--fullscreen');
  $componentSteppedControl.toggleClass('fsa-stepped-control--sticky');

  if ($self.hasClass('pcp-mapping__zoom--toggled')) {
    $icon.attr('xlink:href','img/symbol-defs.svg#pcp-icon--shrink');
  }
  else {
    $icon.attr('xlink:href','img/symbol-defs.svg#pcp-icon--enlarge');
  }

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

$('body').on('click', '[data-behavior~="map-mode"]', function(event) {

  $self = $(this);
  $selfPeers = $self.siblings('[data-behavior="map-mode"]');
  $component = $self.closest('.pcp-mapping');
  $panel = $component.find('.pcp-mapping__panel');
  $panelToggle = $component.find('.pcp-mapping__panel-btn');
  $markers = $component.find('.pcp-mapping__marker');
  $riftDetails = $component.find('.pcp-mapping__rift-detail');
  $submit = $component.find('.fsa-checkbox');
  $actions = $component.find('[data-action]');
  $riftState = $component.find('.fsa-badge');

  selfValue = $self.attr('data-mode');

  $self.addClass('fsa-btn-group__item--active');
  $selfPeers.removeClass('fsa-btn-group__item--active');

  if (selfValue == 'edit') {
    $panel.addClass('pcp-mapping__panel--visible');
    $panelToggle.removeAttr('hidden');
    $markers.removeAttr('hidden');
    $riftDetails.removeAttr('hidden');
    $riftState.removeAttr('disabled');
    $actions.removeAttr('disabled');
    $submit.removeAttr('disabled');
  }
  else {
    $panel.removeClass('pcp-mapping__panel--visible');
    $panelToggle.attr('hidden', true);
    $markers.attr('hidden', true);
    $riftDetails.attr('hidden', true);
    $riftState.attr('disabled', true);
    $actions.attr('disabled', true);
    $submit.attr('disabled', true);
  }

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
  var $scope = $(this).closest('.fsa-modal');
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

$('body').on('change', '[data-behavior~="mark-change-label"]', function(event) {

  var $self = $(this);
  var $scope = $(this).closest('.fsa-modal');
  var $label = $scope.find('h1 .fsa-label');

  if ($self.is(':checked')) {
    $label
      .fadeOut('slow', function() {
        $(this)
          .removeClass('fsa-label--general fsa-label--alert fsa-label--warning fsa-label--success')
          .addClass('fsa-label--success')
          .text('Complete')
          .fadeIn('fast', function() {
            // done
          })
        ;
      })
    ;
  }
  else {
    $label
      .fadeOut('slow', function() {
        $(this)
          .removeClass('fsa-label--general fsa-label--alert fsa-label--warning fsa-label--success')
          .addClass('fsa-label--warning')
          .text('In Progress')
          .fadeIn('fast', function() {
            // done
          })
        ;
      })
    ;
  }

});

$('body').on('change', '[data-behavior~="toggle-finalize"]', function(event) {

  var $self = $(this);
  var $target = $('#UNIQUE-ID-FINALIZER');

  if ($target.is('[disabled]')) {
    $target
      .removeAttr('disabled')
      .addClass('pcp-animate--flipInX')
      .on('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e) {
        $(this).removeClass('pcp-animate--flipInX');
      });
    ;
  }
  else {
    $target.attr('disabled', true);
  }

});

$('body').on('change', '[data-behavior~="update-status-label"]', function(event) {

  var $self = $(this);
  var $target = $('#UNIQUE-ID-STATUS-LABEL__RICE');

  if($self.is(':checked')) {
    $target.html('<span class="fsa-label fsa-label--success" title="This program has been worked on and has been marked as complete">Complete</span>');
  }
  else {
    $target.html('<span class="fsa-label fsa-label--warning" title="This program is actively being worked on by the assignee">In Progress</span>');
  }

});

$('body').on('change', '[data-behavior~="update-status-message"]', function(event) {

  var $self = $(this);
  var $target = $('#' + $self.attr('data-status-target'));
  var messageInitial = $target.data('message-initial')
  var messageAfter = $target.data('message-after')

  if($self.is(':checked')) {
    $target
      .addClass('pcp-animate--flipInX')
      .html(messageAfter)
      .on('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e) {
        $(this).removeClass('pcp-animate--flipInX');
      });
    ;
  }
  else {
    $target
      .addClass('pcp-animate--flipInX')
      .html(messageInitial)
      .on('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e) {
        $(this).removeClass('pcp-animate--flipInX');
      });
    ;
  }

});

$('body').on('click', '[data-behavior~="init-day"]', function(event) {

  var $self = $(this);
  var $component = $self.closest('[data-component]');
  var $targetInfoBar = $('#unique-id-infobar2354');
  var $targetFinalizer = $('#UNIQUE-ID-FINALIZER');

  $self.attr('disabled', true)
  $targetFinalizer
    .removeAttr('disabled')
    .addClass('pcp-animate--flipInX')
    .on('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e) {
      $(this).removeClass('pcp-animate--flipInX');
    });
  ;

  $component
    .find('select, textarea, input')
    .attr('disabled', true)
  ;

  $targetInfoBar
    .hide()
    .removeAttr('hidden') // this isn't how you'd actually do it, I just have it in markup to demo
    .css('opacity', '0') // need to set style properties  before we animate them
    .slideDown('slow', function() { // and then down
      $(this)
        .fadeTo('slow', '1', function() { // and then animate opacity
          $(this).removeAttr('style')
          console.log('Done animating');
        })
      ;
    })
  ;


});

$('body').on('change', '[data-behavior~="toggle-check-group"]', function(event) {

  var $self = $(this);
  var $target = $('#' + $self.attr('data-target'));
  var $component = $self.closest('[data-component~="toggle-check-group"]');
  var $checksAll = $component.find('[data-behavior~="toggle-check-group"]').length;
  var $checksChecked = $component.find('[data-behavior~="toggle-check-group"]:checked').length;

  console.log('there are **' + $checksAll + '** checkboxes, and **' + $checksChecked + '** are checked');

  if ($checksAll == $checksChecked) {
    $target
      .removeAttr('disabled')
      .addClass('pcp-animate--flipInX')
      .on('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e) {
        $(this).removeClass('pcp-animate--flipInX');
      });
    ;
  }
  else {
    $target.attr('disabled', true);
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
  var $component = $self.closest('.pcp-map-toolbar');
  var $labelStatus = $component.find('.fsa-label');

  if ($targetsDisable.is(':disabled')) {

    $targetsDisable.removeAttr('disabled');
    $targetReset.removeAttr('disabled');
    $targetSave.addClass('fsa-content-tabs__label--unsaved')

    $labelStatus
      .fadeOut('slow', function() {
        $(this)
          .removeClass('fsa-label--general fsa-label--alert fsa-label--warning fsa-label--success')
          .addClass('fsa-label--warning')
          .text('In Progress')
          .fadeIn('fast', function() {
            // done
          })
        ;
      })
    ;

  }
  else {

    $targetReset.attr('disabled', true);
    $targetsDisable.attr('disabled', true);
    $targetSave.removeClass('fsa-content-tabs__label--unsaved');

    $labelStatus
      .fadeOut('slow', function() {
        $(this)
          .removeClass('fsa-label--general fsa-label--alert fsa-label--warning fsa-label--success')
          .addClass('fsa-label--success')
          .text('Complete')
          .fadeIn('fast', function() {
            // done
          })
        ;
      })
    ;

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

function ToggleHint() {

  $('body').toggleClass('HINT-SHOW');
  $('.ds-home').css({"display":"block"});

  var hintStatus = Cookies.get('hints');

  if (hintStatus) {
    Cookies.remove('hints');
  } else {
    Cookies.set('hints', true, { expires: 365 });
  }

}

function HintStatus() {

  var hintStatus = Cookies.get('hints');
  var $hintCheckbox = $('#show-hints');

  if (hintStatus) {
    // console.log('There IS a "hints" cookie');
    $('body').addClass('HINT-SHOW');
    $hintCheckbox.prop('checked', true);
  }
  else {
    // console.log('There is NO "hints" cookie');
  }

}

$('body').keydown(function(event) {

  if(event.which == 112) { // F1

    var $hintCheckbox = $('#show-hints');

    if($hintCheckbox.is(':checked')) {
      $hintCheckbox.prop('checked', false);
    } else {
      $hintCheckbox.prop('checked', true);
    }

    ToggleHint();

    return false;
  }

});

$('body').on('change', '[data-behavior~="toggle-prototype-hints"]', function(event) {
  ToggleHint()
})

HintStatus();

$('body').on('click', '[data-behavior~="confirm-remove-state-pair"]', function(event) {

  var $self = $(this);
  var $target = $('#' + $self.attr('data-target'));

  $target.fadeTo('slow', '0', function() {
    $(this).remove();
  })

})

$('body').on('change', '[data-behavior~="new-state-pair__enable"]', function(event) {

  var $self = $(this);
  var $row = $self.closest('.pcp-table__row');
  var $target = $row.find('[data-behavior~="new-state-pair__save"]');
  var $previewValue = $self.val();

  if ($previewValue == '') {
    $target.attr('disabled', true);
  } else {
    $target.removeAttr('disabled');
  }

})

$('body').on('change', '[data-behavior~="new-state-pairing"]', function(event) {

  var $self = $(this);
  var $previewValue = $self.val();
  var $target = $('#' + $self.attr('data-target'));

  $target.html($previewValue);

  if ($self.attr('name') == 'Market') {
    if ($previewValue == '') {
      $target.html('');
    } else {
      $target.prepend(' / ');
    }
  }

})

$('body').on('click', '[data-behavior~="new-state-pair__save"]', function(event) {

  var $self = $(this);
  var $row = $self.closest('.pcp-table__row');
  var $target = $('#' + $self.attr('data-target'));

  $target
    .css('opacity', '0') // need to set opacity to '0' before we animate it to '1'
    .removeAttr('hidden') // this isn't how you'd actually do it, I just have it in markup to demo
    .fadeTo('slow', '1', function() {
      console.log('done fading in');
    })
  ;

  // now let's revert row form elements to initial state
  $row.find('[data-behavior~="new-state-pairing"]').val('');
  $row.find('[data-behavior~="new-state-pair__save"]').attr('disabled', true)
  $row.find('span[id]').html('');


})

$('body').on('change', '[data-behavior~="confirm-reopen"]', function(event) {

  var $self = $(this);
  var $target = $('#' + $self.attr('data-target'));

  if ($self.is(':checked')) {
    $target.removeAttr('disabled');
  } else {
    $target.attr('disabled', true);
  }

})

$('body').on('click', '[data-behavior~="confirm-submit-reopen"]', function(event) {

  var $self = $(this);
  var $reopenTarget = $('#' + $self.attr('data-reopen-target'));
  var $reopenTarget__completer = $reopenTarget.closest('.pcp-title-action-bar').find('[disabled]');
  var $reopenSteppedTabsTarget = $('#' + $self.attr('data-steps-target'));
  var $reopenSteppedTabsTarget__new = $reopenSteppedTabsTarget.siblings('[hidden]');
  var $reopenCompleteCheckbox = $('#' + $self.attr('data-complete-check-target'));

  $reopenTarget.remove();
  $reopenTarget__completer.removeAttr('disabled');
  $reopenSteppedTabsTarget.attr('hidden', true);
  $reopenCompleteCheckbox.removeAttr('disabled');

  $reopenSteppedTabsTarget__new
    .removeAttr('hidden') // this isn't how you'd actually do it, I just have it in markup to demo
    .css('opacity', '0') // need to set opacity to '0' before we animate it to '1'
    .slideUp('slow', function() { // animate the stepped tabs collapsing up
      $(this)
        .slideDown('slow', function() { // and then down
          $(this)
            .fadeTo('slow', '1', function() { // and then animate opacity
              console.log('Done animating Stepped Tabs **reset**');
            })
          ;
        })
      ;
    })
  ;


})

$('body').on('change', '[data-behavior~="toggle-changes-only"]', function(event) {

  var $self = $(this);
  var $target = $('#' + $self.attr('data-target'));
  var $rowsChanged = $target.find('.pcp-table__row--highlight');
  var $rowsUnchanged = $target.find('tbody .pcp-table__row:not(.pcp-table__row--highlight)');

  // TODO: maybe this: http://blog.slaks.net/2010/12/animating-table-rows-with-jquery.html
  if ($self.is(':checked')) {
    $rowsChanged.addClass('pcp-table__row--highlight--suppressed');
    $rowsUnchanged.fadeTo('slow', '0', function() {
      $(this)
        .attr('aria-hidden', true)
        .attr('hidden', true)
        .removeAttr('style');
      ;
    })
  } else {
    $rowsUnchanged
      .css('opacity','0')
      .removeAttr('aria-hidden')
      .removeAttr('hidden')
      .fadeTo('slow', '1', function() {
        $rowsChanged.removeClass('pcp-table__row--highlight--suppressed');
        $(this).removeAttr('style');
      })
    ;
  }

})

$('body').on('change', '[data-behavior~="toggle-county-ref"]', function(event) {

  var $self = $(this);
  var $target = $('#' + $self.attr('data-target'));
  var $countyRefs = $target.find('.pcp-table__county-ref:not(.pcp-table__county-ref--long)');

  if ($self.is(':checked')) {
    $countyRefs.attr('aria-hidden', 'false');
  } else {
    $countyRefs.attr('aria-hidden', 'true');
  }

})

$('body').on('change', '[data-behavior~="toggle-changes-only--cell"]', function(event) {

  // Yes, 98% similar to [data-behavior~="toggle-changes-only"] above
  // but I'm not motivated enough to refactor them to be a single one.
  // Maybe a TODO some day. Sorry, not sorry...?

  var $self = $(this);
  var $target = $('#' + $self.attr('data-target'));
  var $rowsChanged = $target.find('tbody [data-has-changes="true"]');
  var $rowsUnchanged = $target.find('tbody .pcp-table__row:not([data-has-changes="true"])');

  // TODO: maybe this: http://blog.slaks.net/2010/12/animating-table-rows-with-jquery.html
  if ($self.is(':checked')) {
    $rowsUnchanged.fadeTo('slow', '0', function() {
      $(this)
        .attr('aria-hidden', true)
        .attr('hidden', true)
        .removeAttr('style');
      ;
    })
  } else {
    $rowsUnchanged
      .css('opacity','0')
      .removeAttr('aria-hidden')
      .removeAttr('hidden')
      .fadeTo('slow', '1', function() {
        $(this).removeAttr('style');
      })
    ;
  }

})

$('body').on('click', '[data-behavior~="closing-save"]', function(event) {


  var $self = $(this);
  var $targetComponent = $('#' + $self.attr('data-disable-target'));
  var $targetForms = $targetComponent.find('button, textarea, input');
  var $targetCompleter = $('#' + $self.attr('data-complete-target'));
  var $targetCloser = $('#UNIQUE-ID-REOPEN-CLOSING');

  $targetForms.attr('disabled', true);

  // $targetCompleter.removeAttr('disabled');

  $targetCloser
    .removeAttr('hidden')
  ;

  $targetCompleter
    .removeAttr('disabled')
    .addClass('pcp-animate--flipInX')
    .on('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e) {
      $(this).removeClass('pcp-animate--flipInX');
    });
  ;

})

$('body').on('change', '[data-behavior~="enable-closing-save"]', function(event) {

  var $self = $(this);
  var $target = $('#' + $self.attr('data-enable-target'));

  if ($target.is(':disabled')) {
    $target.removeAttr('disabled');
  } else {
    $target.attr('disabled', true);
  }

});

$('body').on('change', '[data-behavior~="icon-size-demo"]', function(event) {

  var $self = $(this);
  var $target = $('#icon-list').find('.pcp-icon')
  var selfValue = $self.val();

  console.log(selfValue);

  $target
    .removeClass('pcp-icon-- pcp-icon--small pcp-icon--medium pcp-icon--large')
    .addClass('pcp-icon--' + selfValue)
    .removeClass('pcp-icon--')
  ;

})

$('body').on('click', '[data-behavior~="button-group-select"]', function(event) {

  var $self = $(this);

  $self
    .addClass('fsa-btn-group__item--active')
    .siblings()
    .removeClass('fsa-btn-group__item--active')
  ;

})

$('body').on('click', '[data-behavior~="change-popover-dir"]', function(event) {

  var $self = $(this);
  var $target = $('#popover-demo');
  var dir = $self.data('dir');

  $target
    .removeClass('pcp-popover--bl pcp-popover--br pcp-popover--tl pcp-popover--tr pcp-popover--lc pcp-popover--rc pcp-popover--lt pcp-popover--lb pcp-popover--rt pcp-popover--rb pcp-popover--bc pcp-popover--tc')
    .addClass('pcp-popover--' + dir)
  ;

})

$('body').on('click', '[data-behavior~="change-popover-size"]', function(event) {

  var $self = $(this);
  var $target = $('#popover-demo');
  var size = $self.data('size');

  $target
    .removeClass('pcp-popover--size-small pcp-popover--size-medium pcp-popover--size-large')
    .addClass('pcp-popover--size-' + size)
  ;

})

$('body').on('click', '[data-behavior~="toggle-popover-title"]', function(event) {

  var $self = $(this);
  var $target = $('#popover-demo').find('.pcp-popover__title');

  $target.toggle();

})

$('body').on('mousedown', '.pcp-mapping__map, .pcp-mapping__hd, .pcp-mapping__toolbar, .pcp-mapping__panel, .pcp-mapping__marker, .pcp-mapping__rift-detail, .pcp-mapping__btn:not([data-behavior="toggle-popover"])', function(event) {

  $('.pcp-popover').removeClass('pcp-popover--visible');

})

;(function($) {
    $.fn.drags = function(opt) {

        opt = $.extend({handle:"",cursor:"move"}, opt);

        if(opt.handle === "") {
            var $el = this;
        } else {
            var $el = this.find(opt.handle);
        }

        return $el.css('cursor', opt.cursor).on("mousedown", function(e) {
            if(opt.handle === "") {
                var $drag = $(this).addClass('draggable');
            } else {
                var $drag = $(this).addClass('active-handle').parent().addClass('draggable');
            }
            var z_idx = $drag.css('z-index'),
                drg_h = $drag.outerHeight(),
                drg_w = $drag.outerWidth(),
                pos_y = $drag.offset().top + drg_h - e.pageY,
                pos_x = $drag.offset().left + drg_w - e.pageX;
            $drag.css('z-index', 1000).parents().on("mousemove", function(e) {
                $('.draggable').offset({
                    top:e.pageY + pos_y - drg_h,
                    left:e.pageX + pos_x - drg_w
                }).on("mouseup", function() {
                    $(this).removeClass('draggable').css('z-index', z_idx);
                });
            });
            e.preventDefault(); // disable selection
        }).on("mouseup", function() {
            if(opt.handle === "") {
                $(this).removeClass('draggable');
            } else {
                $(this).removeClass('active-handle').parent().removeClass('draggable');
            }
            console.log('this is the laziest, hackiest dragging interaction demo ever');
        });

    }
})(jQuery);

$('.pcp-mapping__PLACEHOLDER').drags();

;$(function() {

    var $steppedControl = $('.fsa-stepped-control--sticky'); // only the --sticky ones

    function steppedControl() {

      $steppedControl.each(function(index) {

        var $self = $(this)
        var pageTop = $(window).scrollTop();
        var windowHeight = $(window).height();
        var steppendControlPosTop = $self.offset().top - pageTop;
        var steppendControlHeight = $self.outerHeight();
        var steppendControlPosBot = windowHeight - (steppendControlPosTop + steppendControlHeight);

        // console.log('pageTop: ' + pageTop);
        // console.log('windowHeight: ' + windowHeight);
        // console.log('steppendControlPosTop: ' + steppendControlPosTop);
        // console.log('steppendControlHeight: ' + steppendControlHeight);
        // console.log('steppendControlPosBot: ' + steppendControlPosBot);

        if (steppendControlPosBot > 12) {
          $self.addClass("fsa-stepped-control--unstuck");
        }
        else {
          $self.removeClass("fsa-stepped-control--unstuck");
        }

      });

    }

    if ($steppedControl.length) { // only run if at least one instance

      $(window).scroll(function() {
        steppedControl()
      });

      $('.fsa-modal').scroll(function() {
        steppedControl()
      });

      $(document).ready(function() {
        steppedControl();
      })

      $(window).resize(function() {
        // may want to **debounce** this, e.g. http://benalman.com/projects/jquery-throttle-debounce-plugin/
        steppedControl();
      })

    }

});
