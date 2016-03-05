;(function() {
	var fileUpload = {};
	publicMethod();
	init();
	attachEvents();
	function init() {
		 console.log('стартануло все ок!')
	$('#main_img').fileupload({
						url: 'source/php/',
						add: function (e, data) { // отправляем картинку на сервер
								console.log('картинка ушла на сервер');
								data.submit();
						},
						done: function (e, data) {
								console.log('Все прошло успешно');
								var img =$('<img></img>'),
								uploadImg = data.result.files[0];
								img.attr('src',uploadImg.url);
								img.appendTo('.upload-img');
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

