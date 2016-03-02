'use strict';

module.exports = function($) {
  $.gulp.task('copy:resource', function() {

    return $.gulp.src('./source/images/*.*',{since:$.gulp.lastRun('copy:resource')})
      .pipe($.gulp.dest($.config.root+'/assets/images'))
  });
};
