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

		var spinnerX = $("#control_X"),
				spinnerY = $("#control_Y");

		$(".form__section_disabledSettings").removeClass('visuallyhidden hidden');
		spinnerModule.resetSpinner();
	}

	function publicMethod() {
		resetModule = {
			
		}
	};

	window.resetModule = resetModule;
})();
