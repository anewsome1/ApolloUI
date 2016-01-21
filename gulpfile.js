var gulp = require( 'gulp' );
var rename = require( 'gulp-rename' );
var sass = require( 'gulp-sass' );
var postcss = require( 'gulp-postcss' );
var autoprefixer = require( 'autoprefixer' );
var cssnano = require( 'cssnano' );
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
    .pipe( postcss([
      autoprefixer({
        browsers: [ 'last 2 versions' ]
      })
    ]))
    .pipe( gulp.dest( 'dist/css/' ) )
    .pipe( browserSync.stream() )
    .pipe( postcss([ cssnano() ]))
    .pipe( rename({ 
      suffix: '.min' 
    }))
    .pipe( gulp.dest( 'dist/css/' ) )
    .pipe( browserSync.stream() );
});


gulp.task( 'docs-styles', function () {
  gulp.src( 'docs/_scss/docs.scss' )
    .pipe( sass({ 
        includePaths: [ 'node_modules' ],
        outputStyle: 'expanded'  // expanded for development
      })
      .on( 'error', sass.logError ))
    .pipe( postcss([
      autoprefixer({
        browsers: [ 'last 2 versions' ]
      })
    ]))
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


gulp.task( 'theo-colors', function() {
  gulp.src( 'theo/_color-variables.json')
    .pipe( theo.plugins.transform( 'web' ))
    .pipe( theo.plugins.format( 'scss' ))
    .pipe( gulp.dest( 'scss' ));
});

gulp.task( 'theo-icons-sass', function() {
  gulp.src( 'theo/icons.json')
    .pipe( theo.plugins.transform( 'raw' ))
    .pipe( theo.plugins.format( 'map.scss' ))
    .pipe( gulp.dest( 'scss' ));
});

gulp.task( 'theo-icons-json', function() {
  gulp.src( 'theo/icons.json')
    .pipe( theo.plugins.transform( 'raw' ))
    .pipe( theo.plugins.format( 'json' ))
    .pipe( gulp.dest( 'docs/_data' ));
});

gulp.task( 'theo', [ 'theo-colors', 'theo-icons-sass', 'theo-icons-json' ] );

gulp.task( 'default', [ 'apollo-styles', 'docs-styles', 'docs' ] );
