$('.form-settings')
  .on('submit', function(e) {
    e.preventDefault();
    var _data = $(this).serialize();
    console.log(_data);
    lang = $('html');
    $.ajax({
      type: 'POST',
      url: './php/filedownload.php',
      data: _data,
      // processData: false,contentType: false,
      success: function(data) {
        //var data=JSON.parse(data);
        if (data.responce =='error'){
        if(lang.attr('lang')=='ru'){
        validation.alertPopup('Внимание','Заполнены не все данные');
        }else{
        validation.alertPopup('Attention','Filled not all data');
        }
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
        $.alert({
          title: 'Внимание',
          theme: 'material',
          content: 'Ошибка на сервере: ' + xhr.responseCode,
          confirmButton: 'OK',
          closeIcon: true
        });
      }
    });
  });