var inquirer = require('inquirer');
var files = require('./files');

module.exports = function getConfig() {
    var defaultName = files.getCurrentDirectoryBase();
    var questions = [
        {
            name: 'username',
            type: 'input',
            message: 'Project name',
            default: defaultName,
            validate: function (value) {
                if (value.length > 1) {
                    return true;
                } else {
                    return 'Please enter your new project name';
                }
            }
        },
        {
            name: 'npm',
            type: 'confirm',
            message: 'Npm init?',
            default:true
        }
    ];

    return inquirer.prompt(questions);
};
