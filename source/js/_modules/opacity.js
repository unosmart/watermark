/**
 * Module that is resposible for changing opacity of the watermark.
 * @return {object} This module returns an object with methods inside.
 */
;(function() {
	var opacityModule = {};

	publicMethod();
	init();
	attachEvents();

	function init() {
		/**
		 * Method slide changes the opacity of watermark while sliding the handle.
		 * @param  {object} event  Event object.
		 * @param  {object} ui)    {					var    imgOpacity    Contains determining of position of the slider converted to the opacity units. 
		 * @param  {property} value: 100		}       Property that sets the initial position of the handle.
		 */
		$("#slider").slider({
				slide: function(event, ui) {
					var imgOpacity = ui.value * 0.01;
				
					$('#watermark').css('opacity', imgOpacity);
				},

				value: 100
		});
	};

	function attachEvents() {
	
	};

	function publicMethod() {
		opacityModule = {
			
		}
	};

	window.moduleName = opacityModule;
})();

