// Модуль валидации
var validation = (function (){
	function alertPopup(title,content){
				$.alert({
						title: title,
						theme: 'material',
						content: content,
						confirmButton: 'OK',
						closeIcon: true
				});
	};
	var imgValid = function(elem, data) {
		var	name = data[0].files[0].name,//имя
			size = data[0].files[0].size/1048576,//размер
			type = data[0].files[0].type,//тип
			valid = true;
			lang = $('html');

		if (!~type.indexOf('image')) { // Проверяем тип файла
					if(lang.attr('lang')=='ru'){
						alertPopup('Внимание','Неверный тип файла! Типы файлов доступные для загрузки gif|jpeg|png|bmp ');
				}else{
					alertPopup('Attention','Wrong type of file ! The file types available for download gif|jpeg|png|bmp ');
				}
			valid = false;
		} else if(size > 3) { // Проверяем размер файла
					if(lang.attr('lang')=='ru'){
						alertPopup('Внимание','Запрещено загружать файлы разером больше 3 Мб!');
					}else{
						alertPopup('Attention','You can not upload files larger than Raser 3 Mb!');
				}
			valid = false;
		}
		return valid;
	}
	return {
		imgValid: imgValid,
		alertPopup: alertPopup
	};
})();
