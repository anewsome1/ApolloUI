var gulp = require( 'gulp' );
var rename = require( 'gulp-rename' );
var sourcemaps = require( 'gulp-sourcemaps' );
var gutil = require( 'gulp-util' );
// Styles
var sass = require( 'gulp-sass' );
var postcss = require( 'gulp-postcss' );
var autoprefixer = require( 'autoprefixer' );
var cssnano = require( 'cssnano' );
// Scripts
var browserify = require( 'browserify' );
var source = require( 'vinyl-source-stream' );
var buffer = require( 'vinyl-buffer' );
var uglify = require( 'gulp-uglify' );
// Dev server
var browserSync = require( 'browser-sync' );
// Property processor
var theo = require( 'theo' );


gulp.task( 'serve', [ 'default' ], function() {
  browserSync.init({
    server: 'dist',
    ghostMode: false
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
    .pipe( sourcemaps.init() )
    .pipe( postcss([
      autoprefixer({
        browsers: [ 'last 2 versions' ]
      })
    ]))
    .pipe( browserSync.stream() )
    .pipe( postcss([ cssnano() ]))
    .pipe( rename({
      suffix: '.min'
    }))
    .pipe( sourcemaps.write( './' ))
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


gulp.task('apollo-scripts', function () {
  var b = browserify();

  return b.bundle()
    .pipe( source( './js/apollo.js' ))
    .pipe( buffer())
    .pipe( sourcemaps.init({
      loadMaps: true
    }))
    .pipe( uglify() )
      .on( 'error', gutil.log )
    .pipe( rename({
      suffix: '.min'
    }))
    .pipe( sourcemaps.write( './' ))
    .pipe( gulp.dest( 'dist' ))
    .pipe( browserSync.stream() );
});


gulp.task( 'docs', [ 'jekyll' ], function() {
  gulp.src( 'docs-temp/**/*.html' )
    .pipe( gulp.dest( 'dist' ) )
    .pipe( browserSync.stream() );
});


gulp.task( 'jekyll', function ( gulpCallBack ) {
  var exec = require( 'child_process' ).exec;

  exec( 'jekyll build', function( err, stdout, stderr ) {
    console.log( stdout );
    console.error( stderr );
    gulpCallBack( err );
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

gulp.task( 'theo', [ 'theo-colors', 'theo-icons-sass', 'theo-icons-json' ]);
gulp.task( 'styles', [ 'apollo-styles', 'docs-styles' ]);
gulp.task( 'scripts', [ 'apollo-scripts' ]);
gulp.task( 'default', [ 'theo', 'styles', 'scripts', 'docs' ]);
gulp.task( 'build', [ 'default' ]);
