var gulp = require('gulp');

var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();
var concat = require('gulp-concat');
var copy = require('gulp-copy');
var csso = require('gulp-csso');
var del = require('del');
var gulpShell = require('gulp-shell');
var htmlmin = require('gulp-htmlmin');
var imagemin = require('gulp-imagemin');
var newer = require('gulp-newer');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var terser = require('gulp-terser');


const AUTOPREFIXER_BROWSERS = [
    'ie >= 10',
    'ie_mob >= 10',
    'ff >= 30',
    'chrome >= 34',
    'safari >= 7',
    'opera >= 23',
    'ios >= 7',
    'android >= 4.4',
    'bb >= 10'
];

// Set Paths

var paths = {
    prodStyles: {
        sass: 'src/scss/*.scss',
        css: 'src/css/',
        js: 'src/js/*.js',
        fonts: 'src/fonts/*.*'
    },
    distStyles: {
        css: 'dist/css',
        js: 'dist/js',
        html: 'dist',
        img: 'dist/img',
        fonts: 'dist/fonts'
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
    .pipe(gulp.dest('./dist'))
    .pipe(gulp.dest('./dist/css'))
    .pipe(gulp.dest('./dist/fonts'))
    .pipe(gulp.dest('./dist/img'))
    .pipe(gulp.dest('./dist/js'));
});

//Create files in folders

gulp.task('files', function() {
    return gulp
        .src('./src/', {read: false})
        .pipe(gulpShell([
        'touch src/css/styles.css src/scss/styles.scss index.html src/js/script.js'
        ]));
});

gulp.task('initialWork', gulp.series('structure', 'files'));

//Translate sass to css, add prefixes, bundle all files

gulp.task('sass', function() {
    return gulp
        .src(paths.prodStyles.sass)
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({browsers: AUTOPREFIXER_BROWSERS}))
        .pipe(concat('styles.css'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(paths.prodStyles.css))
        .pipe(browserSync.stream());
});

//Combined tasks with live reload

gulp.task('watch', function() {
    browserSync.init({
        server: './'
    });
    gulp.watch(paths.prodStyles.sass, gulp.series('sass'))
    gulp.watch('./*.html').on('change', browserSync.reload);
});

// For distribution

// Gulp task to minify CSS files

gulp.task('styles', function () {
    return gulp
        .src('src/css/styles.css')
    // Compile SASS files
        .pipe(sass({
            outputStyle: 'nested',
            precision: 10,
            includePaths: ['.'],
            onError: console.error.bind(console, 'Sass error:')
        }))
    // Auto-prefix css styles for cross browser compatibility
        .pipe(autoprefixer({browsers: AUTOPREFIXER_BROWSERS}))
    // Minify the file
        .pipe(csso())
    // Output
        .pipe(gulp.dest(paths.distStyles.css))
});

// Gulp task to minify JavaScript files

gulp.task('scripts', function() {
    return gulp
        .src(paths.prodStyles.js)
    // Minify the file
        .pipe(terser())
    // Output
        .pipe(gulp.dest(paths.distStyles.js))
});

// Gulp task to minify HTML files

gulp.task('pages', function() {
    return gulp
        .src(['./*.html'])
        .pipe(htmlmin({
            collapseWhitespace: true,
            removeComments: true
        }))
        .pipe(gulp.dest(paths.distStyles.html));
});

// Image Task

gulp.task('images', function() {
    return gulp.src('src/img/**/*')
        .pipe(newer(paths.distStyles.img))
        .pipe(imagemin({ optimizationLevel: 5 }))
        .pipe(gulp.dest(paths.distStyles.img));
});

//Copy files

gulp.task('copy', function() {
    return gulp
        .src(paths.prodStyles.fonts)
        .pipe(copy(paths.distStyles.fonts, {prefix: 2}))
        // .pipe(gulp.dest(paths.distStyles.fonts));
});

// Clean output directory

gulp.task('clean', function() {
    return del(['dist/**']);
    
}); 

// Gulp task to minify all files

gulp.task('default', gulp.series('clean', gulp.series(['styles', 'scripts', 'pages', 'images', 'copy'])), function (done) {
    done();
});