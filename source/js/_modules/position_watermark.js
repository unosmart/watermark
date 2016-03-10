var singleModule = (function (){
    var singleMode = false;

  var init = function () {
    _setUpListners();
  };
  var image = $('#watermark');

  var _setUpListners = function () {
    $('#single').on('click', _singleMode); // открыть singleMode
    $('.block00').on('click', _block00);
    $('.block01').on('click', _block01);
    $('.block02').on('click', _block02);

    $('.block10').on('click', _block10);
    $('.block11').on('click', _block11);
    $('.block12').on('click', _block12);

    $('.block20').on('click', _block20);
    $('.block21').on('click', _block21);
    $('.block22').on('click', _block22);

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
    single.addClass('setting-pos__toggle-single_active');
    tilingBtn.removeClass('setting-pos__toggle-tessel_active');

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

  var _block00 = function (e) {
    e.preventDefault();
    image.addClass('top00');
      image.removeClass('content__watermark-block top02 top01 center12 center11 center10 bottom21 bottom20 bottom22');
      image.css({
        top: '',
        left: '',
        right: '',
        bottom: ''
      });
    var top = parseInt(image.css('top'));
    var left = image.css('left');
    $('#control_X').val(left);
    $('#control_Y').val(top);
    console.log(top);
  }

  var _block01 = function (e) {
    e.preventDefault();
    image.addClass('top01');
      image.removeClass('content__watermark-block top00 top02 center12 center11 center10 bottom21 bottom20 bottom22');
      image.css({
        top: '',
        left: '',
        right: '',
        bottom: ''
      });
    var top = parseInt(image.css('top'));
    var left = image.css('left');
    $('#control_Y').val(top);
    $('#control_X').val(left);

  }

  var _block02 = function (e) {
    e.preventDefault();
    image.addClass('top02');
      image.removeClass('content__watermark-block top00 top01 center12 center11 center10 bottom21 bottom20 bottom22');
      image.css({
        top: '',
        left: '',
        right: '',
        bottom: ''
      });
    var top = parseInt(image.css('top'));
    var right = image.css('left');
    $('#control_Y').val(top);
    $('#control_X').val(right);
    console.log($('#control_y'));
  }

  var _block10 = function (e) {
    e.preventDefault();
    image.addClass('center10');
    image.removeClass('content__watermark-block top00 top01 top02 center11 center12 bottom21 bottom20 bottom22');
      image.css({
        top: '',
        left: '',
        right: '',
        bottom: ''
      });
    var top = parseInt(image.css('top'));
    var left = image.css('left');
    $('#control_Y').val(top);
    $('#control_X').val(left);
  }

  var _block11 = function (e) {
    e.preventDefault();
    image.addClass('center11');
      image.removeClass('content__watermark-block top02 top01 top00 center12 center10 bottom21 bottom20 bottom22');
      image.css({
        top: '',
        left: '',
        right: '',
        bottom: ''
      });
    var top = parseInt(image.css('top'));
    var left = image.css('left');
    $('#control_Y').val(top);
    $('#control_X').val(left);
  }

  var _block12 = function (e) {
    e.preventDefault();
    image.addClass('center12');
      image.removeClass('content__watermark-block top02 top01 top00 center11 center10 bottom21 bottom20 bottom22');
      image.css({
        top: '',
        left: '',
        right: '',
        bottom: ''
      });
    var top = parseInt(image.css('top'));
    var right = image.css('left');
    $('#control_Y').val(top);
    $('#control_X').val(right);
  }

  var _block20 = function (e) {
    e.preventDefault();
    image.addClass('bottom20');
      image.removeClass('content__watermark-block top02 top01 center12 center11 center10 bottom21 bottom22');
      image.css({
        top: '',
        left: '',
        right: '',
        bottom: ''
      });
    var top = parseInt(image.css('bottom'));
    var left = image.css('left');
    $('#control_Y').val(top);
    $('#control_X').val(left);
  }

  var _block21 = function (e) {
    e.preventDefault();
    image.addClass('bottom21');
      image.removeClass('content__watermark-block top02 top01 center12 center11 center10 bottom20 bottom22');
      image.css({
        top: '',
        left: '',
        right: '',
        bottom: ''
      });
    var top = parseInt(image.css('bottom'));
    var left = image.css('left');
    $('#control_Y').val(top);
    $('#control_X').val(left);
  }

  var _block22 = function (e) {
    e.preventDefault();
    image.addClass('bottom22');
      image.removeClass('content__watermark-block top02 top01 center12 center11 center10 bottom21 bottom20');
      image.css({
        top: '',
        left: '',
        right: '',
        bottom: ''
      });
    var top = parseInt(image.css('bottom'));
    var right = image.css('left');
    $('#control_Y').val(top);
    $('#control_X').val(right);
  }
  
  return {
    init: init,
    singleMode: singleMode = false
  };

})();
singleModule.init();