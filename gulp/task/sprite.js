'use strict';

module.exports = function($) {
  $.gulp.task('sprite', function () {
    var spriteData = $.gulp.src('./source/images/sprite/*.png')
      .pipe($.sprite({
      imgName: 'sprite.png',
      cssName: '_sprite.scss',
      imgPath:'../images/sprite.png',
      padding: 10,
      algorithm: 'top-down'
      }));
      spriteData.css.pipe($.gulp.dest('./source/style/'));
      return spriteData.img.pipe($.gulp.dest('./build/assets/images/'));
  });


};
