var gulp=require("gulp"),
	watch=require("gulp-watch"),
	uglify=require("gulp-uglify");


	gulp.task("compress",function(){
		return gulp.src("js/shin.js")
		.pipe(uglify())
		.pipe(gulp.dest("minjs"));
	})

	gulp.task("watch",function(){
		gulp.watch("js/shin.js",function(){
			gulp.start("compress");
		})
	})

	gulp.task("default",["watch"]);