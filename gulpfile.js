var gulp = require('gulp'),
    gulpif = require('gulp-if'),
    sass = require('gulp-sass'),
    watch = require('gulp-watch'),
    order = require("gulp-order"),
    clean = require('gulp-rimraf'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    inject = require('gulp-inject'),
    rename = require('gulp-rename'),
    imagemin = require('gulp-imagemin'),
    cleanCSS = require('gulp-clean-css'),
    runSequence = require('run-sequence'),
    spritesmith = require('gulp.spritesmith'),
    autoprefixer = require('gulp-autoprefixer'),
    browserSync = require('browser-sync').create(),
    obfuscate = require('gulp-javascript-obfuscator');

var path = {
    base: 'dev',
    build: 'build',
    libJs: ['dev/js/lib'],
    sprite: ['dev/sprites'],
    sass: ['dev/sass/*.scss', 'dev/sass/**/*.scss'],
    html: ['dev/*.html', 'dev/app/**/*.html' , 'dev/app/**/**/*.html'],
    dirApp: ['dev/app/', 'dev/app/**/', 'dev/app/**/**/'],
    inject: ['dev/js/lib/min/*.js', 'dev/js/*.js', 'dev/css/lib/*.css', 'dev/css/main.css'],
    app: ['dev/app/*.js', 'dev/app/**/*.js', 'dev/app/**/**/*.js']
};

var DIR = "";
var foldelSpriteName = "";

gulp.task('build', () => { 
    DIR = "./build/";
    runSequence('concat:build', 'img:build', 'mincss:build', 'html:build', 'fonts:build', 
                    'services:build', 'obfuscate:bulid', 'start_server');
});

gulp.task('server', () => {
    DIR = "./dev/";
    runSequence('start_server','watch');
});

gulp.task('start_server', () => {
    browserSync.init({
        server: { baseDir: DIR }
    });
});

gulp.task('watch', () => {
    watch(path.sass, ()=> { runSequence('sass', 'inject')} );
    watch(path.app, ()=> { runSequence('concatApp', 'inject')} );

    gulp.watch(path.html).on('change', browserSync.reload);
    
    /*Eventos en la carpeta sprite*/
    watch(path.sprite)
        .on('add', (file, dos) => { 
            var newFile= file.substring(0, file.lastIndexOf("\\"));
            foldelSpriteName = newFile.substring(newFile.lastIndexOf("\\") + 1); 
            gulp.start('sprite')
        })
        .on('change', (file, dos) => { 
            var newFile= file.substring(0, file.lastIndexOf("\\"))
            foldelSpriteName = newFile.substring(newFile.lastIndexOf("\\") + 1); 
            gulp.start('sprite')
        })
        .on('unlink', (file, dos) => { 
            var newFile= file.substring(0, file.lastIndexOf("\\"))
            foldelSpriteName = newFile.substring(newFile.lastIndexOf("\\") + 1); 
            gulp.start('sprite')
        });

    watch(path.dirApp)
        .on('add', () => { gulp.start('concatApp') })
        .on('change', () => { gulp.start('concatApp') })
        .on('unlink', () => { gulp.start('concatApp') });

    watch(path.libJs)
        .on('add', () => { runSequence('concatLib', 'inject') });
});
/*
* Configuración de la tarea Sass
*/
gulp.task('sass', () => {
  return gulp.src(path.sass)
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
              browsers: ['last 3 versions', 'not ie <= 9'],
              cascade: false,
              flexbox: true,
              grid: true
          }))
    .pipe(gulp.dest(path.base+'/css'))
    .pipe(browserSync.stream());
});
/*
* construccion de archivos para sprite
*/
gulp.task('sprite', () => {
  console.log("foldelSpriteName: "+foldelSpriteName)
    var spriteData = gulp.src('./dev/sprites/'+foldelSpriteName+'/*.png')
        .pipe(spritesmith({
            imgName: foldelSpriteName+'.png',
            cssName: foldelSpriteName+'.css',
            imgPath: '../img/'+foldelSpriteName+'.png',
        }));
    spriteData.img.pipe(gulpif('*.png',gulp.dest('./dev/img/')));
    spriteData.css.pipe(gulpif('*.css',gulp.dest('./dev/css/sprites/')));
});
/*
  concatena las librerias de la carpeta lib
*/
gulp.task('concatLib', () => {
  gulp.src([path.base+'/js/lib/*.js'])
  .pipe(order(["angular.min.js", "angular-route.min.js", "*.js"]))
  .pipe(concat('lib.min.js'))
  .pipe(gulp.dest('./dev/js/lib/min/'))
});

/*
  concatena los archivos de la aplicacion angular
*/
gulp.task('concatApp', () => {
  gulp.src(path.app)
  .pipe(order(['*.module.js', '*.js']))
  .pipe(concat('app.js'))
  .pipe(gulp.dest('./dev/js/'))
});

/*
* Inyección de archivos en html
*/
gulp.task('inject', () => {
  var target = gulp.src(path.base+'/index.html');
  var sources = gulp.src(path.inject, {read: false});
 
  return target.pipe(inject(sources, {relative: true, starttag: '<!-- inject:dev:{{ext}} -->'}))
    .pipe(gulp.dest(path.base))
    .on('change', browserSync.reload);
});

/*------------------- Tareas para el metodo build --------------------*/
var pathBuild = {
    base: './build',
  }
  
/*Configuración de la tarea 'concat'*/
gulp.task('concat:build', () => {
    gulp.src(path.base+'/js/lib/min/*.js')
    .pipe(concat('lib.min.js')).pipe(uglify())
    .pipe(gulp.dest(pathBuild.base+'/js/lib/min/'))
});

/*Configuración de la tarea comprimir imagenes*/
gulp.task('img:build', () => {
    gulp.src([path.base+'/img/**/*.*', path.base+'/img/*.*'])
        .pipe(imagemin())
        .pipe(gulp.dest(pathBuild.base+'/img/'));
});

/*Configuración de la tarea comprimir css*/
gulp.task('mincss:build', function() {
    gulp.src(path.base+'/css/main.css')
        .pipe(cleanCSS())
        .pipe(gulp.dest(pathBuild.base+'/css/'))

    gulp.src(path.base+'/css/lib/*.css')
        .pipe(cleanCSS())
        .pipe(gulp.dest(pathBuild.base+'/css/lib'))
});
/*
  Mueve los archivos de tipo html
*/
gulp.task('html:build', function() {
    gulp.src([path.base+'/*html', path.base+'/**/*html', path.base+'/**/**/*html', path.base+'//**/**/**/*html'])
        .pipe(gulp.dest(pathBuild.base))
});
/*
  Mueve los archivos de tipo fuente
*/
gulp.task('fonts:build', function() {
    gulp.src([path.base+'/fonts/*', path.base+'/fonts/**/*'])
        .pipe(gulp.dest(pathBuild.base+'/fonts/'))
});
/*
  Mueve los archivos de la carpeta servicios
*/
gulp.task('services:build', function() {
    gulp.src([path.base+'/dummyServices/*'])
        .pipe(gulp.dest(pathBuild.base+'/dummyServices/'))
});
/* Configuración de la tarea para ofuscar el js*/
gulp.task('obfuscate:bulid', () => {
    gulp.src([path.base+'/js/pre.js', path.base+'/js/app.js', path.base+'/js/post.js'])
        .pipe(concat('app.js'))
        //.pipe(uglify())
        .pipe(obfuscate({sourceMap: true, debugProtection: false}))
        .pipe(gulp.dest(pathBuild.base+'/js/'))
});

/*Configuración de la tarea para eliminar archivos*/
gulp.task('limpiar', function() {
    return gulp.src(['../dist/js/*.js'], { read: false })
           .pipe(clean({ force: true }));
});

