var gulp = require( 'gulp' );
var sass = require( 'gulp-sass' );
var autoprefixer = require( 'gulp-autoprefixer' );
var browserSync = require( 'browser-sync' );


gulp.task('sass', function () {
  gulp.src( 'scss/apollo.scss' )
    .pipe( sass( {} ))
    .pipe( gulp.dest( 'dist/css/' ))
    .pipe( browserSync.reload({ stream: true }));
});


gulp.task('docs', ['jekyll'], function() {
    gulp.src( 'docs/' )
        .pipe( gulp.dest( 'dist/docs/' ))
        .pipe( browserSync.reload({ stream: true, once: true }));
});


gulp.task( 'jekyll', function ( gulpCallBack ) {
  var spawn = require('child_process').spawn;
  var jekyll = spawn('jekyll', ['build'], { stdio: 'inherit' });

  jekyll.on('exit', function(code) {
      gulpCallBack( code === 0 ? null : 'ERROR: Jekyll process exited with code: '+code);
  });
});
