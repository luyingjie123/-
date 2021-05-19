const gulp=require("gulp");
const sass = require("gulp-sass");
const connect=require("gulp-connect");

gulp.task("html",done=>{

    gulp.src("*.html")
    .pipe(gulp.dest("dist"))
    .pipe(connect.reload())
    done()
});
gulp.task("js",done=>{

    gulp.src("*.js")
    .pipe(gulp.dest("dist"))
    .pipe(connect.reload())
    done()
});
gulp.task("img",done=>{

    gulp.src("img")
    .pipe(gulp.dest("dist"))
    .pipe(connect.reload())
    done()
});
// npm install gulp-sass -D

gulp.task("sass", done => {
    gulp.src("sass/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("dist/css"))
        .pipe(connect.reload())
    done()
})

// gulp.task("tesk1",done=>{
//     console.log("卢英杰")

//     done()
// })

// 监听

gulp.task("watch",done=>{
    gulp.watch("*.html",gulp.series("html"))
    gulp.watch("*.img",gulp.series("img"))
    gulp.watch("*.js",gulp.series("js"))
    gulp.watch("*.css",gulp.series("sass"))
    gulp.watch("sass/*.scss", gulp.series("sass"))




    done()
})
// 服务器
gulp.task("server",done=>{

    connect.server({
        root:"dist",
        livereload:true
    })
    done()
})
gulp.task("default",gulp.series("watch","server"))