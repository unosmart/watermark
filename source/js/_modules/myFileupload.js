;(function() {
	var fileUpload = {};
	publicMethod();
	init();
	attachEvents();
	function init() {
		 console.log('стартануло все ок!')
	$('#main_img').fileupload({
						url: 'php/',
						dataType: 'json',
						acceptFileTypes: /(\.|\/)(gif|jpe?g|png)$/i,
						disableImageResize: /Android(?!.*Chrome)|Opera/
							.test(window.navigator && navigator.userAgent),
						add: function (e, data) { // отправляем картинку на сервер
								console.log('Картинка ушла на сервер');
								data.submit();
						},
						done: function (e, data) {
								console.log('Все прошло успешно');
								var uploadImg = 'php/files/spalnia.jpg';
								if ($('.content__img-block').length > 0) {
										$('.image-upload').remove();
								} else {
										// Обертка изображения
										console.log('Формируем обертку изображения');
										$(".content__main-window").append("<div class='content__img-block'></div>");
								}
				// создаем элемент изображения
								var $img = $('<img>', {
												src: uploadImg, // путь до файла
												alt: 'Спальня',
												title: 'Заголовок',
												class: 'image-upload' // добавим класс для изображения
										});
								$(".form__input-img_image").attr("placeholder", "название файла.jpg");

								// добавляем изображение в документ
								$(".content__img-block").prepend($img);
						}
				});
	console.log('стартанул!');
				// конец события отправки изображения на сервер
	};
	function attachEvents() {
	};
	function publicMethod() {
		fileUpload = {
			
		}
	};

	window.myFileUpload = fileUpload;
})();

