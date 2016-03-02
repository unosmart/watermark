'use strict';

module.exports = function($) {
  $.gulp.task('sprite', function () {
    var spriteData = $.gulp.src('./source/images/sprite/*.png')
      .pipe($.sprite({
      imgName: 'sprite.png',
      cssName: '_sprite.scss',
      padding: 10,
      algorithm: 'top-down'
      }));
      spriteData.img.pipe($.gulp.dest('./build/assets/css/'));
      spriteData.css.pipe($.gulp.dest('./source/style/'));
  });

};
