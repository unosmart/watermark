<?php
namespace abeautifulsite;
use Exception;
require('SimpleImage.php');
//Статус и сообщение
$data['message'] = 'Успех!';
$data['status'] = 'ok';
//Получение данных из формы
// $_POST=array('fileurl'=>'http://water.local/php/files/a1856c576a3fa36605f2ffd8e4d89a7d (1).jpg','watermark'=>'http://water.local/php/files/rustile (2)','mode'=>'single-mode');
if (empty($_POST["fileurl"])||empty($_POST["watermark"])|| empty($_POST["mode"])){
  exit(json_encode(array('responce'=>'error')));
}
$opacity = 100; //значение для прозрачности по умолчанию
$margin_X = 10;//значение отступов по умолчанию
$margin_Y = 10;//значение отступов по умолчанию
$axisX = 0;//значение позиции по умолчанию
$axisY = 0;//значение позиции по умолчанию
$bgimage_url = $_POST["fileurl"];
$watermark_url = $_POST["watermark"];
$setting_mode = $_POST['mode'];
if ($setting_mode == 'tiling-mode'){
$margin_X = $_POST['control_X'];
$margin_Y = $_POST['control_Y'];
$axisX = 0;
$axisY = 0;
}else {
$axisX = $_POST['control_X'];
$axisY = $_POST['control_Y'];
}
$opacity = $_POST['opacity'] / 100;
//Тестирование
//Создаем префикс
$prefix = "UNO-" . mt_rand(0, 1000);
//Указываем куда записать
$result_name = 'result-' . $prefix . '.jpg';
$dir_answer = 'upload';
$dir_result = 'upload/';
$src_result = $dir_result . $result_name;
//Создаем папку если не создана
if (!file_exists($dir_result)) {
    mkdir($dir_result, 755); //Создание папки
}
//Сохранение разеров изображений
$image = new SimpleImage($bgimage_url);
$image_width = $image->get_width();
$image_height = $image->get_height();
$watermark = new SimpleImage($watermark_url);
$watermark_width = $watermark->get_width();
$watermark_height = $watermark->get_height();
//Уменьшение водяного знака если больше оригинала. Вписываем его в размеры изображения.
if ($image_width / $watermark_width < 1) {
    $watermark = $watermark->fit_to_width($image_width);
    $watermark_height = $watermark->get_height();
}
if ($image_height / $watermark_height < 1) {
    $watermark = $watermark->fit_to_height($image_height);
    $watermark_width = $watermark->get_width();
}
if ($setting_mode == 'tiling-mode') {
    //Ограничение по соотношению изображений
    $marginX = $margin_X;
    $marginY = $margin_Y;
    $watermark_width += $marginX;
    $watermark_height += $marginY;
    $ratio_x = ceil($image_width / $watermark_width);
    $ratio_y = ceil($image_height / $watermark_height);
    for ($i = 0; $i < $ratio_y; $i++) {
        for ($j = 0; $j < $ratio_x; $j++) {
            $x = $axisX + $watermark_width * $j;
            $y = $axisY + $watermark_height * $i;
            $image = $image->overlay($watermark, 'top left', $opacity, $x, $y);
        }
    }
    //Сохранение результата
    $image->save($src_result);
} else {
//Сохранение результата
$file = $image->overlay($watermark, 'top left',$opacity, $axisX, $axisY)->save($src_result);
}
//Запись пути для ответа
// require('funtion.php');
// file_force_download($src_result);
$data['result'] = $dir_answer;
$data['filename'] = $result_name;
header('Content-Type: application/json');
//exit(json_encode(array('responce'=>'error2')));
exit(json_encode(array('responce'=>'success','filename'=>'php/'.$src_result)));
?>