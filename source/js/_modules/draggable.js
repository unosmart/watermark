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
    // var k = 1;
    // water_width = $('#watermark').width();
    // img_width = $('#uploaded-img').width();
    // cont_width = $('.content__main-window').width();  
    // k= img_width/cont_width;
    // console.log(img_width);
    // console.log(cont_width);
    // console.log(k);
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
