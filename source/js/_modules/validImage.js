// Модуль валидации
var validation = (function (){
	var imgValid = function(elem, data) {
		var	name = data[0].files[0].name,//имя
			size = data[0].files[0].size/1048576,//размер
			type = data[0].files[0].type,//тип
			valid = true;
		if (!~type.indexOf('image')) { // Проверяем тип файла
			alert("Неверный тип файла! Типы файлов доступные для загрузки gif|jpeg|png|bmp ");
			valid = false;
		} else if(size > 3) { // Проверяем размер файла
			alert("Запрещено загружать файлы разером больше 3 Мб!");
			valid = false;
		}
		return valid;
	}
	return {
		imgValid: imgValid
	};
})();
