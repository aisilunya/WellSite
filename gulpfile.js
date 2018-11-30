var     fileinclude = require('gulp-file-include');
var	gulp = require('gulp');
var	browserSync = require('browser-sync').create();
var	less = require('gulp-less');
var	path = require('path');
var	LessPluginAutoPrefix = require('less-plugin-autoprefix');
var	autoprefix = new LessPluginAutoPrefix({ grid: true,  browsers: ["last 2 versions", "ie 6-8", "Firefox > 20"] });
// var processorsArray = [
//   require('autoprefixer')({ grid: true, browsers: ['last 2 versions', 'ie 6-8', 'Firefox > 20']  })
// ];

// gulp.task('autoprefixer', function () {
//     var less = require('gulp-less');
//     var sourcemaps   = require('gulp-sourcemaps');
//     var autoprefixer = require('autoprefixer');
 
//     return gulp.src('css/*.css')
//         .pipe(sourcemaps.init())
//         .pipe(less([ autoprefixer() ]))
//         .pipe(sourcemaps.write('.'))
//         .pipe(gulp.dest('css/'));
// });
gulp.task('less', function () {
	return gulp.src('css/style.less')
	.pipe(less({
		// paths: [ path.join(__dirname, 'lib') ],
		plugins: [autoprefix]
	}))
	.pipe(gulp.dest('css/'));
});

gulp.task('browser-sync', function() {
	browserSync.init({
		server: {baseDir: "./"}
	});
});

gulp.task('default', function() {

	gulp.run('browser-sync');


	gulp.watch(['css/lib/**', 'css/style.less'], function(event) {
		gulp.run('less');
	})

	gulp.watch(['css/style.css', 'index.html']).on('change', browserSync.reload);

})
