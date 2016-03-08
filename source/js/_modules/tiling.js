;(function() {
	var tilingModule 	= {},
			tileModeOn 		= false;

	publicMethod();
	init();
	attachEvents();

	function init() {
		// Some code..functions that are needed for module initialization 
	};

	function attachEvents() {
		$('#clickme').on('click', tileWatermark);
	}

	function tileWatermark(e) {
		e.preventDefault();

		if (!tileModeOn) {
			
			var biggerContainer = '<div class="biggerContainer">';

			tileModeOn = true;
			$('#contentImgBlock').append(biggerContainer);

			$('#watermark').css({
				left: '0',
				top: '0'
			});

			for (var i = 0; i < 5; i++) {
				cloneWatermark(i);
			}

			$('#watermark').appendTo('.biggerContainer')
		}

	};

	function cloneWatermark() {
		var $clone = $('#watermarkImg').clone(true, true);

		$($clone).appendTo('#watermark');
	};

	function publicMethod() {
		tilingModule = {
			// name : public function
		}
	};

	window.moduleName = tilingModule;
})();
