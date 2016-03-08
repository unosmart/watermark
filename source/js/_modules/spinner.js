$(function() {

  var spinnerX = $( "#control_X" ).spinner({
    min : 0,
    max : 435,
    step : 5
  });

  var spinnerY = $( "#control_Y" ).spinner({
    min : 0,
    max : 325,
    step : 5
  });

  var myDrag = $('#watermark');

  spinnerX.on('spin', function(event, ui) {
    var currentVal = ui.value;

    myDrag.css ({
      left: currentVal + 'px'
    });
  });

  spinnerY.on('spin', function(event, ui) {
    var currentVal = ui.value;

    myDrag.css ({
      top: currentVal + 'px'
    });
  });

});
