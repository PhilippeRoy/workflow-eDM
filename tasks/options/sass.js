module.exports = {
  dist: {
    options: {
      // cssmin will minify later
      style: 'expanded'
    },
    files: {
      'eDM/css/styles.css': 'eDM/css/scss/styles.scss'
    }
  }
}