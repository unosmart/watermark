$(document).ready(function() {
  var block00 = $('.block00');
  var block01 = $('.block01');
  var block02 = $('.block02');

  var block10 = $('.block10');
  var block11 = $('.block11');
  var block12 = $('.block12');

  var block20 = $('.block20');
  var block21 = $('.block21');
  var block22 = $('.block22');
  var image = $('#watermark');

    // first row
    block00.on('click', function(event) {
      event.preventDefault();
      image.addClass('top00');
      image.removeClass('content__watermark-block top02 top01 center12 center11 center10 bottom21 bottom20 bottom22');
      image.css({
        top: '',
        left: '',
        right: '',
        bottom: ''
      });;
    });

     block01.on('click', function(event) {
      event.preventDefault();
      image.addClass('top01');
      image.removeClass('content__watermark-block center12 center11 center10 bottom21 bottom20 bottom22');
      image.css({
        top: '',
        left: '',
        right: '',
        bottom: ''
      });;
    });

     block02.on('click', function(event) {
      event.preventDefault();
      image.addClass('top02');
      image.removeClass('content__watermark-block top01 top00 center12 center11 center10 bottom21 bottom20 bottom22');
      image.css({
        top: '',
        left: '',
        right: '',
        bottom: ''
      });;
    });

      // second row
      block10.on('click', function(event) {
      event.preventDefault();
      image.addClass('center10');
      image.removeClass('content__watermark-block center12 center11 bottom21 bottom22 bottom20');
      image.css({
        top: '',
        left: '',
        right: '',
        bottom: ''
      });;
    });

     block11.on('click', function(event) {
      event.preventDefault();
      image.addClass('center11');
      image.removeClass('content__watermark-block bottom21 bottom22 center10 center12 bottom20 bottom21 bottom22');
      image.css({
        top: '',
        left: '',
        right: '',
        bottom: ''
      });;
    });

     block12.on('click', function(event) {
      event.preventDefault();
      image.addClass('center12');
      image.removeClass('content__watermark-block center11 center10 top00 bottom20 bottom21 bottom22');
      image.css({
        top: '',
        left: '',
        right: '',
        bottom: ''
      });;
    });

      // third row
      block20.on('click', function(event) {
      event.preventDefault();
      image.addClass('bottom20');
      image.removeClass('content__watermark-block top01 top00 top02  center12 center11 center10 bottom21 bottom22');
      image.css({
        top: '',
        left: '',
        right: '',
        bottom: ''
      });;
    });

     block21.on('click', function(event) {
      event.preventDefault();
      image.addClass('bottom21');
      image.removeClass('content__watermark-block top01 top00 top02 center12 center11 center10 bottom22');
      image.css({
        top: '',
        left: '',
        right: '',
        bottom: ''
      });;
    });

     block22.on('click', function(event) {
      event.preventDefault();
      image.addClass('bottom22');
      image.removeClass('content__watermark-block top01 top00 top02 center12 center11 center10 bottom21 bottom20');
      image.css({
        top: '',
        left: '',
        right: '',
        bottom: ''
      });;
    });
});