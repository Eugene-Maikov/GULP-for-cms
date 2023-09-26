const {src, dest} = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const sassGlob = require('gulp-sass-glob')
const plumber = require('gulp-plumber')

const path = require('../../config/path.js')
const settings = require('../../config/notifyMessage.js')

const scss = () => {
  return src(path.scss.src, {sourcemaps: true})
    .pipe(plumber(settings.plumberNotify('SCSS')))
    .pipe(sassGlob())
    .pipe(sass())
    .pipe(dest(path.scss.dest, {sourcemaps: true}))
}

module.exports = scss