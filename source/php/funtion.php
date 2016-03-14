<?php 
  function file_force_download($file) {
  if (file_exists($file)) {
    // сбрасываем буфер вывода PHP, чтобы избежать переполнения памяти выделенной под скрипт
    // если этого не сделать файл будет читаться в память полностью!
    if (ob_get_level()) {
      ob_end_clean();
    }
   // echo $file;
    // заставляем браузер показать окно сохранения файла
    header('Content-Type: application/jpeg');
    header('Content-Disposition: attachment; filename='.$file);
    header('Content-Transfer-Encoding: binary');
    header('Content-Length: ' . filesize($file));
    // читаем файл и отправляем его пользователю
    readfile($file);
    exit;
  }
}