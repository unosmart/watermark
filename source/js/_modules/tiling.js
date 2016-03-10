;(function() {
  var tilingModule  = {},
      tileModeOn = false;

  publicMethod();
  init();
  attachEvents();

  function init() {
  };

  function attachEvents() {
    $('#tessel').on('click', enableTilingMode);
  }

  function enableTilingMode(e) {
    e.preventDefault();

    var singleMode = $('#single'),
        tilingMode = $('#tessel');

    singleMode.removeClass('setting-pos__toggle-single_active');
    tilingMode.addClass('setting-pos__toggle-tessel_active');

    if (!tileModeOn) {
      var tilingWraps = '<div class="tilingGrid"><div class="bigContainer">',
          wrapper = $('.tilingGrid');

      $('#contentImgBlock').append(tilingWraps);
      $('#watermark').appendTo('.bigContainer');

      tileWatermark();
    }
  };

  function tileWatermark() {

      var element = $('#watermarkImg'),
          wrapper = $('.tilingGrid'),
          watermarkWidth = element.width(),
          watermarkHeight = element.height(),
          tiling = $('#watermark'),
          gutterLeft = 10,
          gutterBottom = 10,
          wrapperWidth = wrapper.width(),
          wrapperHeight = wrapper.height(),
          countWidth = Math.round(wrapperWidth / watermarkWidth),
          countHeight = Math.round(wrapperHeight / watermarkHeight),
          i = 0,
          l = 0;

      tileModeOn = true;
      element.first().css('display', 'none');

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

    dragModule.setContainment();
    dragModule.draggable();
  };

  function publicMethod() {
    tilingModule = {
      
    }
  };

  window.tilingModule = tilingModule;
})();
