function createGitignore(callback) {
  var filelist = _.without(fs.readdirSync('.'), '.git', '.gitignore');

  if (filelist.length) {
    
  } else {
    touch( '.gitignore' );
    return callback();
  }
}
