;(function() {
  var spinnerModule = {},
      myDrag = $('#watermark'),
      spinnerX = null,
      spinnerY = null;

  publicMethod();
  init();
  attachEvents();

  function init() {
    spinnerX = $( "#control_X" ).spinner({
    min : 0,
    max : 435,
    step : 5
    });

    spinnerY = $( "#control_Y" ).spinner({
    min : 0,
    max : 326,
    step : 5
    });
  };

  function attachEvents() {
    spinnerX.on('spin', moveAxisX);
    spinnerY.on('spin', moveAxisY);
  };

  function moveAxisX(event, ui) {
    if (singleModule.singleMode) {
      var currentVal = ui.value;
      myDrag.css ({
        left: currentVal + 'px'
      });
    }
  };

  function moveAxisY(event, ui) {
    if (singleModule.singleMode) {
      var currentVal = ui.value;

      myDrag.css ({
        top: currentVal + 'px'
      });
    }
  };

  function moveGutterX(event, ui) {
    var currentVal = ui.value,
        watermarkImg = $('#watermarkImg'),
        waterImgs = watermarkImg.siblings();

    waterImgs.css ({
      'margin-left': currentVal + 'px'
    });

    $('.vertical').css({'width': currentVal + 'px'});
    

    if ($('#control_X').val() > 9) {

      $('#watermark').css({
        width: 'auto',
        'max-width': '1100px'
      });
    } else{
      $('#watermark').css({
        width: tilingModule.tilingWidth
      });
    }
  };

  function moveGutterY(event, ui, selectors) {
    var currentVal = ui.value,
        watermarkImg = $('#watermarkImg'),
        waterImgs = watermarkImg.siblings();
    
    waterImgs.siblings().css ({
      'margin-bottom': currentVal + 'px'
    });

    if ($('#control_Y').val() > 9) {
      $('#watermark').css({
        height: 'auto',
        'max-height': '1100px'
      });
    }

    // Visualization of changing margins on Y axis
    $('.parallel').css({'height': currentVal + 'px'});

  };

  function publicMethod() {
    spinnerModule = {
      tilingModeSpinner: function() {
        var width = tilingModule.gutterLeft + 'px',
            height = tilingModule.gutterBottom + 'px';

        spinnerX.val(tilingModule.gutterLeft);
        spinnerY.val(tilingModule.gutterBottom);

        // Visualization of changing margins
        $('.vertical').width(tilingModule.gutterLeft);
        $('.parallel').height(tilingModule.gutterBottom);

        spinnerX.on('spin', moveGutterX);
        spinnerY.on('spin', moveGutterY);

        spinnerX = $( "#control_X" ).spinner({
          min : 0,
          max : 100,
          step : 1
        });

        spinnerY = $( "#control_Y" ).spinner({
          min : 0,
          max : 100,
          step : 1
        });
      },

      singleModeSpinner: function() {
        init();
      },
      /**
       * Resets the spinners value after changing the mode.
       */
      resetSingleModeSpinner: function() {
        spinnerX.val(0);
        spinnerY.val(0);
      }
    }
  };

  window.spinnerModule = spinnerModule;
})();
