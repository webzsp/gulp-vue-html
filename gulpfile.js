const gulp=require('gulp')
var babel = require("gulp-babel");
const plugin =require('./plugin')
gulp.task('default', function() {
    gulp.src("./index.html")
    .pipe(plugin())
        .pipe(babel({
            presets: ['@babel/preset-env'],
        }))
        .pipe(gulp.dest("./dest"))
})
