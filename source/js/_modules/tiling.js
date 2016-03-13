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
  };

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

      tilingModule.tilingMode = true;

      contentImgBlock.append(tilingWraps);
      watermarkBlock.appendTo('.bigContainer');
      enableMarginVisualization();
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
      left: '20%',
      top: '20%'
    });
    element.first().css('display', 'none');
    tiling.width(countWidth * (watermarkWidth + tilingModule.gutterLeft));
    tiling.height(countHeight * (watermarkHeight + tilingModule.gutterBottom));
    tilingModule.tilingWidth = countWidth * (watermarkWidth + tilingModule.gutterLeft);

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
   
    spinnerModule.tilingModeSpinner();
    dragModule.setContainment();
  };

  /**
   * Enable margin visuzalization
   */
  function enableMarginVisualization() {
    var rows = $('.settings-box__row'),
        settingBox = $('.setting-box'),
        parallel = '<div class="parallel">',
        vertical = '<div class="vertical">';

    rows.css('display', 'none');
    settingBox.addClass('tilingMode');

    settingBox.append(parallel);
    settingBox.append(vertical);
  };

  function publicMethod() {
    tilingModule = {
      tilingMode: tilingMode = false,
      gutterLeft: 10,
      gutterBottom: 10,
      tilingWidth: null
    }
  };

  window.tilingModule = tilingModule;
})();
