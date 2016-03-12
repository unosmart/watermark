;(function() {
  var tilingModule  = {},
      tilingMode = false;

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
        tilingBtn = $('#tessel'),
        contentImgBlock = $('#contentImgBlock'),
        watermarkBlock = $('#watermark');

    singleModule.singleMode = false;
    singleMode.removeClass('setting-pos__toggle-single_active');
    tilingBtn.addClass('setting-pos__toggle-tessel_active');

    if (!tilingModule.tilingMode) {
      var tilingWraps = '<div class="tilingGrid"><div class="bigContainer">',
          wrapper = $('.tilingGrid');
      $valuemode = $('#valuemode');
      $valuemode.val('tiling-mode');
      tilingModule.tilingMode = true;

      contentImgBlock.append(tilingWraps);
      watermarkBlock.appendTo('.bigContainer');

      tileWatermark();
    }
  };

  function tileWatermark() {

      var element = $('#watermarkImg'),
          wrapper = $('.tilingGrid'),
          watermarkWidth = element.width(),
          watermarkHeight = element.height(),
          tiling = $('#watermark'),
          wrapperWidth = wrapper.width(),
          wrapperHeight = wrapper.height(),
          countWidth = Math.round(wrapperWidth / watermarkWidth),
          countHeight = Math.round(wrapperHeight / watermarkHeight),
          i = 0,
          l = 0;

      tiling.css({
        left: '0',
        top: '0'
      });
      element.first().css('display', 'none');
      tiling.width(countWidth * (watermarkWidth + tilingModule.gutterLeft));
      tiling.height(countHeight * (watermarkHeight + tilingModule.gutterBottom));

      for (i, l = countHeight * countWidth; i < l; i++) {
        var clone = $('#watermarkImg').clone();
        clone.css({
          display: 'block',
          float: 'left',
          'margin-left': tilingModule.gutterLeft,
          'margin-bottom': tilingModule.gutterBottom
        });

        clone.appendTo(tiling);
      }
   
    singleModeSpinnerModule.tilingModeSpinner();
    dragModule.setContainment();
  };

  function publicMethod() {
    tilingModule = {
      tilingMode: tilingMode = false,
      gutterLeft: 10,
      gutterBottom: 10
    }
  };

  window.tilingModule = tilingModule;
})();
