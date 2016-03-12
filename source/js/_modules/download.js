$('.form-settings')
  .on('submit', function(e) {
    e.preventDefault();
    var _data = $(this).serialize();
    console.log(_data);
    $.ajax({
      type: 'POST',
      url: './php/filedownload.php',
      data: _data,
      success: function(data) {
        if (data.responce ==='error'){
        console.log('Не заполнены все данные');
        }else{
          $('.results').html(data);
        console.log(data);
        }
      },
      error:  function(xhr, str){
        console.log('Ошибка на сервере: ' + xhr.responseCode);
      }
    });
  });