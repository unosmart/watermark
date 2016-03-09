;(function() {
  var tilingModule  = {},
      tileModeOn = false;

  publicMethod();
  init();
  attachEvents();

  function init() {

  };

  function attachEvents() {
    $('#clickme').on('click', createWraps);
  }

  function createWraps(e) {
    e.preventDefault();

    var tilingWraps = '<div class="tilingGrid"><div class="bigContainer">',
        wrapper = $('.tilingGrid');

    $('#contentImgBlock').append(tilingWraps);
    $('#watermark').appendTo('.bigContainer');

    tileWatermark();
  };

  function tileWatermark() {

    if (!tileModeOn) {
      var element = $('#watermarkImg'),
          wrapper = $('.tilingGrid'),
          watermarkWidth = element.width(),
          watermarkHeight = element.height(),
          tiling = $('#watermark'),
          gutterLeft = 10,
          gutterBottom = 10,
          wrapperWidth = wrapper.width(),
          wrapperHeight = wrapper.height(),
          i = 0,
          l = 0;

      tileModeOn = true;
      element.first().css('display', 'none');

      var countWidth = Math.round(wrapperWidth / watermarkWidth);
      var countHeight = Math.round(wrapperHeight / watermarkHeight);

      tiling.width(countWidth * (watermarkWidth + gutterLeft));
      tiling.height(countHeight * (watermarkHeight + gutterBottom));

      for (i, l = countHeight * countWidth; i < l; i++) {
        var clone = $('#watermarkImg').clone();
        clone.css({
          display: 'block',
          float: 'left',
          'margin-left': gutterLeft,
          'margin-bottom': gutterBottom
        });

        clone.appendTo(tiling);
        
      }
    }

    dragModule.setContainment();
    dragModule.draggable();
  };

  function publicMethod() {
    tilingModule = {
      
    }
  };

  window.tilingModule = tilingModule;
})();
