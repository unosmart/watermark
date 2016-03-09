;(function() {
  var langTranslate = {};
  publicMethod();
  attachEvents();
  var language = {
      ru : {
        '.content__title-text' : 'Генератор водяных знаков',
        '.settings__title': 'Настройки',
        '.form__section__title_img' : 'Исходное изображение',
        '.form__section__title_watermark' : 'Водяной знак',
        '.form__section__title_pos' : 'Положение',
        '.form__section__title_opacity' : 'Прозрачность',
        '.settings-btn_clean' : 'Сброс',
        '.settings-btn_download' : 'Скачать',
        '.copyright': '© 2016. Это сайт команды №3, пожалуйста, не копируйте и не воруйте  его!'
      },
      en : {
        '.content__title-text' : 'Generator Watermark',
        '.settings__title': 'Settings',
        '.form__section__title_img' : 'Original image',
        '.form__section__title_watermark' : 'Watermark',
        '.form__section__title_pos' : 'Position',
        '.form__section__title_opacity' : 'Opacity',
        '.settings-btn_clean' : 'Reset',
        '.settings-btn_download' : 'Download',
        '.copyright': '© 2016. This site team №3, please do not copy or steal it!'
      }
  },
  lang = 'ru';
  function toggleLanguage(lang){
    $.each(language[lang], function(key){
        $(key).text(this);
    });
  };
  function attachEvents(){
      $('.languages__link').on('click', function(e) {
          e.preventDefault();
          var $this = $(this);
          lang = $this.attr('lang');
          if($this.attr('lang')=='ru'){
              $this.addClass('languages__link_active');
              $('.languages__link_en').removeClass('languages__link_active');
          } else if($this.attr('lang')=='en'){
              $this.addClass('languages__link_active');
              $('.languages__link_ru').removeClass('languages__link_active');
          }
          $('html').attr('lang', lang);
          toggleLanguage(lang);
      })
  };
  function publicMethod() {
      langTranslate = {
      }
  };
  window.myTranslate = langTranslate;
})();
