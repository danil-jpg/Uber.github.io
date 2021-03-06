import gulp from "gulp"
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import del from "del";
import cleanCss from "gulp-clean-css"
import rename from "gulp-rename";
import babel from "gulp-babel";
import uglify from "gulp-uglify";
import concat from "gulp-concat";
import sourcemaps from "gulp-sourcemaps";
import autoPrefixer from "gulp-autoprefixer";
import imagein from "gulp-imagemin";
import htmlmin from 'gulp-htmlmin';
import gulpSize  from "gulp-size";
import  newer from "gulp-newer";
import browserSync1 from "browser-sync";
import webpack from "webpack-stream"
const sass = gulpSass(dartSass);
const browserSync = browserSync1.create();

const paths = {
	html : {
		src : "index.html",
		dest : "dist/"
	},
	styles : {
		src : `css/style.css`,
		dest : "dist/css/"
	},
	scripts : {
		src : 'scripts/**/*.js',
		dest : "dist/js/"
	},
	images : {
		src : "/img/*",
		dest: "dist/img/"
	},
}

function clean(){
	return del(["dist/*" ,"!dist/images"])
}

function styles(){
	return gulp.src(paths.styles.src)
	.pipe(cleanCss(
		{level : 2}
	))
	.pipe(gulp.dest(paths.styles.dest))
	.pipe(browserSync.stream())
}


function  scripts(){
	return  gulp.src(paths.scripts.src)
	.pipe(babel({
		presets: ['@babel/env']
	}))
	.pipe(gulpSize(
		{showFiles:  true}
	))
	.pipe(uglify())
	.pipe(webpack({
		devtool: 'source-map'
	}))
	.pipe(gulp.dest(paths.scripts.dest))
	.pipe(browserSync.stream())
}

function watch(){
	browserSync.init({
        server: "./"
    })
	gulp.watch(paths.html.src , minifyHtml)
	gulp.watch(paths.html.dest).on("change" ,browserSync.reload)
	gulp.watch(paths.styles.src, styles)
	gulp.watch(paths.scripts.src, scripts)
}

function img(){
	return gulp.src(paths.images.src)
	.pipe(newer(paths.images.dest))
	.pipe(imagein())
	.pipe(gulp.dest(paths.images.dest))
}

function minifyHtml(){
	return gulp.src(paths.html.src)
	.pipe(htmlmin({	includeAutoGeneratedTags: true,
		removeAttributeQuotes: true,
		removeComments: true,
		removeRedundantAttributes: true,
		removeScriptTypeAttributes: true,
		removeStyleLinkTypeAttributes: true,
		sortClassName: true,
		useShortDoctype: true,
		collapseWhitespace: true}))
	.pipe(gulpSize(
		{showFiles:  true}
	))
	.pipe(gulp.dest(paths.html.dest))
	.pipe(browserSync.stream())
}

const build =  gulp.series(clean,gulp.parallel(minifyHtml,scripts,img),watch)

export default build