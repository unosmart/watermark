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

          drag: function(e, ui) {
            control_X.val(ui.position.top);
            control_Y.val(ui.position.left);
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
