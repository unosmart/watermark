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
         containment: 'parent'
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
