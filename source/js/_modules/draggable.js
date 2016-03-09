/**
 * Module for initialization of Draggable
 * @return {object} Returns object with initialization method.
 */
;(function(){
  var dragModule = {};

  publicMethod();
  init();
  attachEvents();

  function init() {
    dragModule.draggable();
  };

  function attachEvents() {
  };

  function publicMethod() {
    dragModule = {
      /**
       * Method for initialization of Draggable
       */
      draggable: function() {
        $("#watermark").draggable({

          containment: 'parent',

          drag: function(e) {
            $('#control_X').val(e.offsetX);
            $('#control_Y').val(e.offsetY);
          }
       });
      },
      /**
       * Method for setting containment parent.
       */
      setContainment: function() {
        $("#watermark").draggable( "option", "containment", "parent" );
      }
    }
  };

  window.dragModule = dragModule;
})();
