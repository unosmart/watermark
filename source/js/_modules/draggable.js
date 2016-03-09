$(function() {

    $( "#watermark" ).draggable({
      containment:'parent',

      drag: function(e) {
        $('#control_X').val(e.offsetX);
        $('#control_Y').val(e.offsetY);
      }

    });

});
