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
	};

	function reset(e) {
		e.preventDefault();

		$(".form__section_disabledSettings").removeClass('visuallyhidden hidden');
	}

	function publicMethod() {
		resetModule = {
			
		}
	};

	window.resetModule = resetModule;
})();
