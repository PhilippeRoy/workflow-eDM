module.exports = {
  dynamic: {
    files: [{
      expand: true,
      cwd: 'eDM/images/',
      src: ['**/*.{png,jpg,gif}'],
      dest: 'eDM/images/'
    }]
  }
}