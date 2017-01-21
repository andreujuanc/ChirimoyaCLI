var exec = require('child_process').exec;
var files = require('./files');
var currentDir = files.getCurrentDirectoryBase();

module.exports = {
    init: function () {
        var child = exec(
            'npm init -f',
            //{ cwd: currentDir },
            function (error, stdout, stderr) {
                console.log('stdout: ' + stdout);
                console.log('stderr: ' + stderr);
                if (error !== null) {
                    console.log('exec error: ' + error);
                }
            });
    },
    addPackage: function (packageName) {

        var child = exec(
            'npm install ' + packageName + ' --save',
            //{ cwd: currentDir },
            function (error, stdout, stderr) {
                console.log('stdout: ' + stdout);
                console.log('stderr: ' + stderr);
                if (error !== null) {
                    console.log('exec error: ' + error);
                }
            });
    }

}