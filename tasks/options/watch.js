module.exports = {
  options: {
    livereload: true,
  },
  // scripts: {
  //   files: ['js/*.js'],
  //   tasks: ['jshint', 'concat', 'uglify'],
  //   options: {
  //     spawn: false,
  //   }
  // },
  css: {
    files: ['eDM/css/scss/*.scss'],
    tasks: ['sass'],
    options: {
      spawn: false,
    }
  },
  images: {
    files: ['eDM/images/**/*.{png,jpg,gif}', 'eDM/images/*.{png,jpg,gif}'],
    tasks: ['imagemin'],
    options: {
      spawn: false,
    }
  },
  html:{
    files: ['./**/*.html'],
    tasks: [],
    options: {
      spawn: false
    }
  }
}