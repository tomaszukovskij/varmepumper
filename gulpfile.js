//
// version: 0.0.7
//
// @TODO
// Instaliuojant iconfont modulis apsiverkia, nes neranda pythono, reikia pasigilinti.

// Visi reikiami taska, seip reikia kazkaip pagalvoti kaip padaryti pasirinkima kuriu
// reikia, o kuriu ne, nes pvz php'ui nereikia tiek tasku
var gulp 			= require( 'gulp' );
var sass 			= require( 'gulp-sass' );
var autoprefixer 	= require( 'gulp-autoprefixer' );
var livereload 		= require( 'gulp-livereload' );
var pug 			= require(	'gulp-pug'	);
var minifyJS 		= require(	'gulp-uglify');

var appBase =  './';

var config = {
	scssPath: appBase + 'assets/sass/',
	cssPath: appBase + 'assets/css/',
	jsPath: appBase + 'assets/js/',
};

// *
// Gulp taskas failu minifikavimui
// *

// Sass taskas su prefix'u
gulp.task('sass', function () {
	gulp.src( config.scssPath + '**/*.sass' )
		.pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
		.pipe(autoprefixer('last 3 versions'))
		.pipe(gulp.dest( config.cssPath ))
		.pipe(livereload());
});

// Pug compile
gulp.task('pug',function() {
	return gulp.src('pug/*.pug')
	.pipe(pug({
	   doctype: 'html',
	   pretty: true
	}))
	.pipe(gulp.dest('./pug-compiled'));
});

gulp.task('pug-watch', ['pug']);

// Uglify JS
gulp.task('compressJS', function () {
    gulp.src(config.jsPath +'*.js') // path to your file
    .pipe(minifyJS())
    .pipe(gulp.dest(config.jsPath +'min'));
});

// Default watcher

gulp.task('default', ['sass', 'pug'], function () {
	gulp.watch( config.scssPath + '**/*.sass' , ['sass']);
	gulp.watch('pug/**/*.pug', ['pug']);
	livereload.listen();
});

