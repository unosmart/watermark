;(function() {
	var fileUpload = {};
	publicMethod();
	init();
	attachEvents();
	function init() {
		_initializeUploads();
};
	function _initializeUploads() { //Инициализация инпутов
			var k = 1,	// Общий коэффициент
					kw = 1, // Коэффициент ширины
					kh = 1; // Коэффициент высоты
		$('#main_img').fileupload({
					url: 'php/fileUpload.php',
					dataType: 'json',
					maxNumberOfFiles: 1,
					acceptFileTypes: /(\.|\/)(gif|jpe?g|png)$/i,
					disableImageResize: /Android(?!.*Chrome)|Opera/
						.test(window.navigator && navigator.userAgent),
					add: function (e, data) { // отправляем картинку на сервер
						if (validation.imgValid($('#main_img'),$(data))) {
							data.submit();
						}
					},
					done: function (e, data) {
							var imgArray = data.result.files[0];
							if ($('.content__img-block').length > 0) {
									$('#uploaded-img').remove();//удаляем картинку ,если она есть
							} else {
									//Обертка, если отпраляем в первый раз, при этом блок отсутвует
									$(".content__main-window").append("<div class='content__img-block'></div>");
							}
							// Если до загрузки фона уже были вотермарки, удаляем
							if ($("#watermark").length > 0) {
									$('#watermarkImg').remove();
									$(".form__input-img_watermark").attr("placeholder", 'Image.jpg');
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
								function _setResize(classCss, h, w) {
										$img.addClass(classCss);
										$('#uploaded-img').css({
												'height': h + 'px',
												'width': w + 'px'
										});
								};
								var width = $(this).width(),//Выбираем размер
										height = $(this).height(),
										blockHeight = $('.content__main-window').height(),
										blockWidth = $('.content__main-window').width(),
										kw = width / blockWidth; // Считаем ширину
										kh = height / blockHeight; // и высоту
										if (kw > kh) { // Выбираем больший коэффициент
											k = kw;
										} else {
											k = kh;
										};
										prop = blockWidth /blockHeight;
									if ((width < blockWidth) && (height < blockHeight)) {//Проверяем нужно ли ресайзить
											_setResize('', height, width);
									} else if (width > height) {
											_setResize('image-horizantal ', Math.round(height / k), blockWidth);
									} else if (width < height){
											_setResize('image-vertical ', blockHeight, Math.round(width / k));
									}
							});
							$("#watermarkFile").removeAttr('disabled');
							$("#imgInput").attr('value', imgArray.url); //Записываем ссылку на оригинал, для дальнейшей склейки на сервере.
							$(".content__img-block").prepend($img);// Вставляем в поток
							// анимация на блокировку input
							var disabliedInput = $(".form__section_disabledInput");
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
		$('#watermarkFile').fileupload({ 
					url: 'php/fileUpload.php',
					dataType: 'json',
					maxNumberOfFiles: 1,
					acceptFileTypes: /(\.|\/)(gif|jpe?g|png)$/i,
					disableImageResize: /Android(?!.*Chrome)|Opera/
							.test(window.navigator && navigator.userAgent),
					add: function (e, data) {
						if (validation.imgValid($('#watermarkFile'),$(data))) {
							data.submit();
						}
					},
					done: function (e, data) {
							var imgArray = data.result.files[0];
							singleModule.resetPos();//сбрасываем положение водяного знака
							if ($('#uploaded-img').length > 0) {
									// удаляем предыдущий водяной знак
									if ($('#watermark').length > 0) {
											$('#watermarkImg').remove();
									}
							}
							$watermark = $('<img>', {// создаем водяной знак
											src: imgArray.url,
											alt: imgArray.name,
											title:imgArray.name,
											id: 'watermarkImg'
									});
								$watermark.load(function () {
								$(this).removeAttr("width")// удаляем атрибуты ширины и высоты
											.removeAttr("height")
											.css({
													width: "",
													height: ""
											});
								function _setResizeWater(classCss, h, w) {
										$watermark.addClass(classCss);
										$('#watermarkImg').css({
												'max-height': h + 'px',
												'max-width': w + 'px'
										});
								};
								var width = $(this).width(),//Выбираем размер
										height = $(this).height(),
										canvasHeight = $('#uploaded-img').height(),
										canvasWidth = $('#uploaded-img').width(),
										kw = width / canvasWidth; // Считаем ширину
										kh = height / canvasHeight; // и высоту
										if (kw > kh) { // Выбираем больший коэффициент
											k = kw;
										} else {
											k = kh;
										};
										prop = canvasWidth /canvasHeight;
									if ((width < canvasWidth) && (height < canvasHeight)) {//Проверяем нужно ли ресайзить
											_setResizeWater('', height, width);
									} else if (width > height) {
											_setResizeWater('water-horizantal ', Math.round(height / k*0.5), canvasWidth);
									} else if (width < height){
											_setResizeWater('water-vertical ', canvasHeight, Math.round(width / k*0.5));
									}
							});
							$(".form__input-img_watermark").attr("placeholder", imgArray.name);
							$("#reset").removeAttr('disabled');
							$("#submit").removeAttr('disabled');
							$("#waterInput").attr('value', imgArray.url); //Записываем ссылку на водяной знак, для дальнейшей склейки на сервере.
							$(".content__watermark-block").append($watermark);// добавляем в поток
							// анимация на блокировку position
							var disabliedPosition = $(".form__section_disabledSettings");
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

