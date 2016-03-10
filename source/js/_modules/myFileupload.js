;(function() {
	var fileUpload = {};
	publicMethod();
	init();
	attachEvents();
	function init() {
/*
Обработка основной картинки
*/
	$('#main_img').fileupload({
			url: 'php/',
			dataType: 'json',
			maxNumberOfFiles: 1,
			acceptFileTypes: /(\.|\/)(gif|jpe?g|png)$/i,
			disableImageResize: /Android(?!.*Chrome)|Opera/
				.test(window.navigator && navigator.userAgent),
			add: function (e, data) { // отправляем картинку на сервер
					data.submit();
			},
			done: function (e, data) {
					var imgArray = data.result.files[0];
					if ($('.content__img-block').length > 0) {
							$('#uploaded-img').remove();//удаляем картинку ,если она есть
					} else {
							/*
							Обертка если отпраляем в первый раз, при этом блок отсутвует
							*/
							$(".content__main-window").append("<div class='content__img-block'></div>");
					}
					var $img = $('<img>', {// создаем элемент изображения
									src: imgArray.url, // путь до файла
									alt: imgArray.name,
									title: imgArray.name,
									id: 'uploaded-img' // добавим класс для изображения
							});
					$(".form__input-img_image").attr("placeholder", imgArray.name);
					$img.load(function () {
							$(this).removeAttr("width")// удаляем атрибуты ширины и высоты
									.removeAttr("height")
									.css({
											width: "",
											height: ""
									});
						var width = $(this).width(),//Выбираем размер
								height = $(this).height(),
								blockHeight = $('.content__main-window').height(),
								blockWidth = $('.content__main-window').width(),
								prop = blockWidth /blockHeight,
								setResize = function (classCss, h, w) {
										$img.addClass(classCss);
										$('#uploaded-img').css({
												'height': h + 'px',
												'width': w + 'px'
										});
								};
							if ((width < blockWidth) && (height < blockHeight)) {//Проверяем нужно ли ресайзить
									setResize('', height, width);
							} else if (f < width / height) {
									setResize('image-horizantal ', Math.round(blockWidth * height / width), blockWidth);
							} else if (width < height){
									setResize('image-vertical ', blockHeight, Math.round(blockHeight * width / height));
							}
							console.log(blockHeight);console.log(blockWidth);
					});
					$("#watermarkFile").removeAttr('disabled');
					$(".content__img-block").prepend($img);// Вставляем в поток
					// анимация на блокировку input
					var disabliedInput = $(".disabled_block_input");
						if(disabliedInput.hasClass('hidden')) {
							disabliedInput.removeClass('hidden');
							setTimeout(function () {
								disabliedInput.removeClass('visuallyhidden');
							}, 5);
						} else {
							disabliedInput.addClass('visuallyhidden');
							disabliedInput.one('transitionend', function(e) {
								disabliedInput.addClass('hidden');
							});
						}
			}		
	});
/*
Обработка водяного знака
 */
	$('#watermarkFile').fileupload({ 
			url: 'php/',
			dataType: 'json',
			acceptFileTypes: /(\.|\/)(gif|jpe?g|png)$/i,
			disableImageResize: /Android(?!.*Chrome)|Opera/
					.test(window.navigator && navigator.userAgent),
			add: function (e, data) {
					data.submit();
			},
			done: function (e, data) {
					var imgArray = data.result.files[0];
					// проверим есть ли фон, если да загрузим ватемарк
					if ($('.content__watermark-block').length > 0) {
							// удаляем предыдущий водяной знак
							if ($('#watermarkImg').length > 0) {
									$('#watermarkImg').remove();
							}
					$watermark = $('<img>', {// создаем водяной знак
									src: imgArray.url,
									alt: imgArray.name,
									title:imgArray.name,
									id: 'watermarkImg'
							});
					$(".form__input-img_watermark").attr("placeholder", imgArray.name);
					$(".content__watermark-block").append($watermark);// добавляем в поток
					// анимация на блокировку position
					var disabliedPosition = $(".disabled_block_position");
						if(disabliedPosition.hasClass('hidden')) {
							disabliedPosition.removeClass('hidden');
							setTimeout(function () {
								disabliedPosition.removeClass('visuallyhidden');
							}, 5);
						} else {
							disabliedPosition.addClass('visuallyhidden');
							disabliedPosition.one('transitionend', function(e) {
								disabliedPosition.addClass('hidden');
							});
						}
					}
			}
	});
	};
	function attachEvents() {
	};
	function publicMethod() {
		fileUpload = {
		}
	};
	window.myFileUpload = fileUpload;
})();

