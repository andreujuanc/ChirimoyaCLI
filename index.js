#!/usr/bin/env node

var chalk       = require('chalk');
var clear       = require('clear');
var CLI         = require('clui');
var figlet      = require('figlet');
var Preferences = require('preferences');
var Spinner     = CLI.Spinner;
var _           = require('lodash');
var touch       = require('touch');
var fs          = require('fs');


var files = require('./src/files');
var getConfig = require('./src/config');
var processConfig = require('./src/process');

clear();
console.log(
    chalk.yellow(
        figlet.textSync('ChiriCLI', { horizontalLayout: 'full' })
    )
);

if (files.directoryExists('.chiri')) {
  console.log(chalk.red('Already a chiri project!'));
  process.exit();
}

getConfig()
    .then(processConfig);


