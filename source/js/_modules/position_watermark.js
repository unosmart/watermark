var singleModule = (function (){
  var singleMode = false,
      image = $('#watermark');

  var init = function () {
    _setUpListners();
    singleModule.singleMode = true;
  };

  var _setUpListners = function () {
    $('#single').on('click', _singleMode); // открыть singleMode
  
    $('.settings-box__cell').on('click', _position);

  };
  // Переключение 
  var _singleMode = function (e) {
    e.preventDefault();
    var single = $('#single'),
        tilingBtn = $('#tessel'),
        bigContainer = $('.bigContainer'),
        watermarkBlock = $('#watermark'),
        firstElement = $('#watermarkImg').first(),
        elems = $('#watermarkImg').siblings();

    tilingModule.tilingMode = false;
    singleMode = false;
    spinnerModule.singleModeSpinner();
    single.addClass('setting-pos__toggle-single_active');
    tilingBtn.removeClass('setting-pos__toggle-tessel_active');

    spinnerModule.resetSingleModeSpinner();

    resetPostionBlock();

    if (!singleModule.singleMode) {
      singleModule.singleMode = true;

      dragModule.setContainment();
      bigContainer.unwrap();
      watermarkBlock.unwrap();
      firstElement.css({
        display: 'block',
        postion: 'absolute'
      });
      $('#watermark').css({
        left: '0',
        top: '0',
        height: 'auto',
        width: 'auto'
      });
      elems.remove();
    }
  };
  // Позиционирование
  var _position = function (e) {
    var heightBig = $('#contentImgBlock').innerHeight();
    var widthBig = $('#contentImgBlock').innerWidth();

    var heightSmall = $('#watermark').innerHeight();
    var widthSmall = $('#watermark').innerWidth();

    var block = $('.settings-box__cell');
    var image = $('#watermark');

    var block = $(this);

    switch (block.data("position")) {
      case 1 :
       image.css({
         position: 'absolute',
         top: 0,
         left: 0
       });
      var top = parseInt(image.css('top'));
      var left = parseInt(image.css('left'));
      $('#control_X').val(left);
      $('#control_Y').val(top);
       break;
      case 2 :
       image.css({
         position: 'absolute',
         top: 0,
         left: widthBig/2 - widthSmall/2
       });
      var top = parseInt(image.css('top'));
      var left = parseInt(image.css('left'));
      $('#control_X').val(left);
      $('#control_Y').val(top);
       break;
      case 3 :
       image.css({
         position: 'absolute',
         top: 0,
         left: widthBig - widthSmall
       });
      var top = parseInt(image.css('top'));
      var left = parseInt(image.css('left'));
      $('#control_X').val(left);
      $('#control_Y').val(top);
       break;
      case 4 :
       image.css({
         position: 'absolute',
         top: heightBig/2 - heightSmall/2,
         left: 0
       });
      var top = parseInt(image.css('top'));
      var left = parseInt(image.css('left'));
      $('#control_X').val(left);
      $('#control_Y').val(top);
       break;
      case 5 :
       image.css({
         position: 'absolute',
         top: heightBig/2 - heightSmall/2,
         left: widthBig/2 - widthSmall/2
       });
      var top = parseInt(image.css('top'));
      var left = parseInt(image.css('left'));
      $('#control_X').val(left);
      $('#control_Y').val(top);
       break;
      case 6 :
       image.css({
         position: 'absolute',
         top: heightBig/2 - heightSmall/2,
         left: widthBig - widthSmall
       });
      var top = parseInt(image.css('top'));
      var left = parseInt(image.css('left'));
      $('#control_X').val(left);
      $('#control_Y').val(top);
       break;
      case 7 :
       image.css({
         position: 'absolute',
         top: heightBig - heightSmall,
         left: 0
       });
      var top = parseInt(image.css('top'));
      var left = parseInt(image.css('left'));
      $('#control_X').val(left);
      $('#control_Y').val(top);
       break;
      case 8 :
        image.css({
         position: 'absolute',
         top: heightBig - heightSmall,
         left: widthBig/2 - widthSmall/2
       });
      var top = parseInt(image.css('top'));
      var left = parseInt(image.css('left'));
      $('#control_X').val(left);
      $('#control_Y').val(top);
       break;
      case 9 :
       image.css({
         position: 'absolute',
         top: heightBig - heightSmall,
         left: widthBig - widthSmall
       });
      var top = parseInt(image.css('top'));
      var left = parseInt(image.css('left'));
      $('#control_X').val(left);
      $('#control_Y').val(top);
       break;
      default:
        alert( 'Я таких значений не знаю' );
    }
  };

  /**
   * Восстанавливаем блок позиционирования
   */
  function resetPostionBlock() {
    $('.settings-box__row').css({
      display: 'table-row',
      // hei: 'value2'
    });
    $('.setting-box').removeClass('tilingMode');
    $('.parallel').remove();
    $('.vertical').remove();
  };


  return {
    init: init,
    singleMode: singleMode = false
  };

})();
singleModule.init();