
// Include Gulp

var gulp = require('gulp');

// Include Our Plugins

var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssnano = require('cssnano');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync').create();
var gulpShell = require('gulp-shell');
var newer = require('gulp-newer');
var imagemin = require('gulp-imagemin');
var htmlclean = require('gulp-htmlclean');

// Set Paths

var paths = {
  styles: {
    src: 'src/scss/*.scss',
    dest: 'src/css/',
    js: 'js/*.js',
    out: 'build/img/',
    html: 'build/'
  }
}

//Create Folder Structure

gulp.task('structure', function() {
  return gulp
    .src('*.*', {read: false})
    .pipe(gulp.dest('./src'))
    .pipe(gulp.dest('./src/css'))
    .pipe(gulp.dest('./src/scss'))
    .pipe(gulp.dest('./src/img/content'))
    .pipe(gulp.dest('./src/img/icons'))
    .pipe(gulp.dest('./src/fonts'))
    .pipe(gulp.dest('./src/js'))
    // .pipe(gulp.dest('./build'))
    // .pipe(gulp.dest('./build/css'))
    // .pipe(gulp.dest('./build/scss'))
    // .pipe(gulp.dest('./build/img/content'))
    // .pipe(gulp.dest('./build/img/icons'))
    // .pipe(gulp.dest('./build/fonts'))
    // .pipe(gulp.dest('./build/js'));
});

gulp.task('files', function() {
  return gulp
    .src('src/css/', {read: false})
    .pipe(gulpShell([
      'touch src/css/styles.css src/scss/styles.scss src/index.html src/js/script.js'
    ]));
});

gulp.task('initialWork', gulp.series('structure', 'files'));

// Watch

gulp.task('style', function() {
  return gulp
    .src(paths.styles.src)
    .pipe(sourcemaps.init())
    .pipe(sass())
    .on('error', sass.logError)
    // .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(paths.styles.dest))
    // .pipe(browserSync.stream());
});

gulp.task('reload', function() {
  browserSync.reload();
});

gulp.task('watch', function() {
  // browserSync.init({
  //   server: {
  //     baseDir: './'
  //   }
  // });
  gulp.watch(paths.styles.src, gulp.series('style'));
  gulp.watch('*.html', gulp.series('reload'));
  // gulp.watch(paths.js, ['lint', 'scripts']);
});

// Lint Task

gulp.task('lint', function() {
  return gulp
    .src('src/js/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('scripts', function() {
  return gulp
    .src('src/js/*.js')
    .pipe(concat('all.js'))
    .pipe(gulp.dest('dist'))
    .pipe(rename('all.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('build/js'));
});

// Image Task

gulp.task('images', function() {
  return gulp.src('src/img/**/*')
    .pipe(newer(paths.styles.out))
    .pipe(imagemin({ optimizationLevel: 5 }))
    .pipe(gulp.dest(paths.styles.out));
});

// //HTML Task

// gulp.task('html', gulp.series('images'), function() {
//   return gulp.src('src/*.html')
//     .pipe(newer('build/'))
//     .pipe(htmlclean())
//     .pipe(gulp.dest('build/test'));
// });