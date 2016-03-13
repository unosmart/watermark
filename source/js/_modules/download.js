$('.form-settings')
  .on('submit', function(e) {
    e.preventDefault();
    var _data = $(this).serialize();
    console.log(_data);
    $.ajax({
      type: 'POST',
      url: './php/filedownload.php',
      data: _data,
      // processData: false,contentType: false,
      success: function(data) {
        //var data=JSON.parse(data);
        if (data.responce =='error'){
        console.log('Не заполнены все данные');
        }else{
        var link = document.createElement('a');
        link.target = "_blank";
        link.download = "result.jpg";
        link.href = data.filename;
        link.click();
        //window.location.assign(data.filename);
        console.log(data);
        }
      },

      error:  function(xhr, str){
        console.log('Ошибка на сервере: ' + xhr.responseCode);
      }
    });
  });