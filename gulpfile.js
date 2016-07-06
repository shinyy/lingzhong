var gulp=require("gulp"),
	watch=require("gulp-watch"),
	// autoprefixer=require("gulp-autoprefixer"),
	plumber=require("gulp-plumber"),//这个是语法错误不弹出监控的插件
	uglify=require("gulp-uglify");


	gulp.task("compress",function(){
		return gulp.src("js/shin.js")
		.pipe(plumber())
		.pipe(uglify())
		.pipe(gulp.dest("minjs"));
	})
    
    //使用Autoprefixer来补全浏览器兼容的css????
	// gulp.task("fixcss",function(){
	// 	return gulp.src("css/shin.css")
	// 	.pipe(autoprefixer({
	// 		browsers:["last 2 versions"],
	// 		cascade:false
	// 	}))
	// 	.pipe(gulp.dest("mincss"))
	// })

	gulp.task("watch",function(){
		gulp.watch("js/shin.js",function(){
			gulp.start("compress");
		});
		gulp.watch("css/shin.css",function(){
			gulp.start("fixcss");
		})
	})

	gulp.task("default",["watch"]);