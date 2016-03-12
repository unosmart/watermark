/**
 * Module for initialization of Draggable
 * @return {object} Returns object with initialization method.
 */
;(function(){
  var dragModule = {};
  var control_X = $('#control_X');
  var control_Y = $('#control_Y');

  publicMethod();
  init();
  attachEvents();

  function init() {
    /**
     * Initialization of Draggable
     */
    $("#watermark").draggable({

      containment: 'parent',

      drag: function(e, ui) {
        if (singleModule.singleMode) {
          control_X.val(ui.position.left);
          control_Y.val(ui.position.top);
        }
      }
    });
   
  };

  function attachEvents() {
  };

  function publicMethod() {
    dragModule = {
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
