var gulp = require( 'gulp' );
var sass = require( 'gulp-sass' );
var autoprefixer = require( 'gulp-autoprefixer' );
var browserSync = require( 'browser-sync' );
var theo = require( 'theo' );


gulp.task( 'serve', [ 'default' ], function() {
  browserSync.init({
    server: 'dist'
  });

  gulp.watch( 'scss/**/*.scss', [ 'apollo-styles' ] );
  gulp.watch( 'docs/**/*.html', [ 'docs' ] );
  gulp.watch( 'docs/_scss/**/*.scss', [ 'docs-styles' ] );
});


gulp.task( 'apollo-styles', function () {
  gulp.src( 'scss/apollo.scss' )
    .pipe( sass({ 
        includePaths: [ 'node_modules' ],
        outputStyle: 'expanded'  // expanded for development
      })
      .on( 'error', sass.logError ))
    .pipe( gulp.dest( 'dist/css/' ) )
    .pipe( browserSync.stream() );
});


gulp.task( 'docs-styles', function () {
  gulp.src( 'docs/_scss/docs.scss' )
    .pipe( sass({ 
        includePaths: [ 'node_modules', 'scss' ],
        outputStyle: 'expanded'  // expanded for development
      })
      .on( 'error', sass.logError ))
    .pipe( gulp.dest( 'dist/css/' ) )
    .pipe( browserSync.stream() );
});


gulp.task( 'docs', [ 'jekyll' ], function() {
  gulp.src( 'docs-temp/**/*.html' )
    .pipe( gulp.dest( 'dist' ) )
    .pipe( browserSync.stream() );
});


gulp.task( 'jekyll', function ( gulpCallBack ) {
  var spawn = require( 'child_process' ).spawn;
  var jekyll = spawn( 'jekyll', [ 'build' ], { stdio: 'inherit' });

  jekyll.on( 'exit', function( code ) {
    gulpCallBack( code === 0 ? null : 'ERROR: Jekyll process exited with code: '+code);
  });
});


gulp.task( 'theo', function() {
  gulp.src( '_colors.json')
    .pipe( theo.plugins.transform( 'web' ))
    .pipe( theo.plugins.format( 'scss' ))
    .pipe( gulp.dest( 'scss' ));
});


gulp.task( 'default', [ 'apollo-styles', 'docs-styles', 'docs' ] );
