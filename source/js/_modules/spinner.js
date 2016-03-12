;(function() {
  var singleModeSpinnerModule = {},
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
  };

  function moveGutterY(event, ui, selectors) {
    var currentVal = ui.value,
        watermarkImg = $('#watermarkImg'),
        waterImgs = watermarkImg.siblings();
    
    waterImgs.siblings().css ({
      'margin-bottom': currentVal + 'px'
    });
  };

  function publicMethod() {
    singleModeSpinnerModule = {
      tilingModeSpinner: function() {
        spinnerX.val(tilingModule.gutterLeft);
        spinnerY.val(tilingModule.gutterBottom);

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

      singleModeSpenner: function() {
        init();
      }
    }
  };

  window.singleModeSpinnerModule = singleModeSpinnerModule;
})();
