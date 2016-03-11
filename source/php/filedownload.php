<?php
include('plugins/SimpleImage.php');
use plugins\SimpleImage as SimpleImage;
//Статус и сообщение
$data['message'] = 'Успех!';
$data['status'] = 'ok';
$flag = true;
//Получение данных из формы
if (!isset($_POST["fileurl"])||!isset($_POST["watermark"])||!isset($_POST["control_X"])||!isset($_POST["control_Y"])||!isset($_POST["opacity"])){
    $flag = false;
}
if (isset($_POST["mode"])){
$setting_mode = $_POST['mode'];
}
if($flag){
$bgimage_url = $_POST['fileurl'];
$watermark_url = $_POST['watermark'];
$axisX = $_POST['control_X'];
$axisY = $_POST['control_Y'];
$opacity = $_POST['opacity'] / 100;
//Создаем префикс
$prefix = "UNO-" . mt_rand(0, 1000);
//Указываем куда записать
$result_name = 'result-' . $prefix . '.jpg';
$dir_answer = 'upload/watermark/';
$dir_result = __DIR__ . '/../' . 'upload/watermark/';
$src_result = __DIR__ . '/../' . $dir_result . $result_name;;
//Создаем папку если не создана
if (!file_exists($dir_result)) {
    mkdir($dir_result, 755); //Создание папки
}
//Сохранение разеров изображений
$image = new SimpleImage($bgimage_url);
$image_width = $main_image->get_width();
$image_height = $main_image->get_height();
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
//Сохранение результата
$file = $image->overlay($watermark, 'top left', $opacity, $axisX, $axisY)->save($src_result);
}
//Заись пути для ответа
$data['result'] = $dir_answer;
$data['filename'] = $result_name;
header('Content-Type: application/json');
echo json_encode($data);
exit;
?>