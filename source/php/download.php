<?php
session_start();
$_SESSION['filename'];
//if (!empty($_POST['data'])){
//$obj=json_decode($_POST['data']);
//};
$fileName = $_SESSION['filename'];;
echo $fileName;
$result = 'upload/result-UNO-7.jpg';
echo $finalImage;
header('Content-type: application/jpeg');
header('Content-Disposition: attachment; filename="result.jpg"');
readfile($result);