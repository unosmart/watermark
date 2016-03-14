;(function() {
	var resetModule = {},
			resetBtn = $('#form__reset-btn');

	publicMethod();
	init();
	attachEvents();

	function init() {
		
	};

	function attachEvents() {
		resetBtn.on('click', reset);
		resetBtn.on('click', singleModule.enableSingle); // сброс на singleMode
	};
	function resetCanvas(){
		if ($('.content__img-block').length > 0) {
			$('#uploaded-img').remove();//удаляем картинку ,если она есть
			$(".form__input-img_image").attr("placeholder", 'Image.jpg');
		} else {
		//Обертка, если отпраляем в первый раз, при этом блок отсутвует
			$(".content__main-window").append("<div class='content__img-block'></div>");
		}
		// Если до загрузки фона уже были вотермарки, удаляем
		var water=$("#watermark"),
		bigContainer = $('.bigContainer'),
		watermarkBlock = $('#watermark'),
		tilingGrid = $('.tilingGrid'),
		elems = $('#watermarkImg').siblings();
		if (watermarkBlock.length > 0) {
			elems.remove();
			$(".form__input-img_watermark").attr("placeholder", 'Image.jpg');
		}
	}
	function reset(e) {
		e.preventDefault();

		var spinnerX = $("#control_X"),
				spinnerY = $("#control_Y");

		$(".form__section_disabledSettings").removeClass('visuallyhidden hidden');
		$(".form__section_disabledInput").removeClass('visuallyhidden hidden');
		spinnerModule.resetSpinner();
		singleModule.resetPos();
		resetCanvas();
		if(tilingModule.tilingMode = true){
			tilingModule.tilingMode = false;
			singleModule.singleMode = true;
		}
		$('#watermark').css('opacity', '1');
		$("#slider").slider({
				slide: function(event, ui) {
				imgOpacity = ui.value * 0.01,
				$('#watermark').css('opacity', imgOpacity);
				},
				value: 100
		});
	
		$('#watermarkFile').attr('disabled','');
	}

	function publicMethod() {
		resetModule = {
			
		}
	};

	window.resetModule = resetModule;
})();
