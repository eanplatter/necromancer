#!/usr/bin/env node
'use strict';

var _shelljs = require('shelljs');

var _shelljs2 = _interopRequireDefault(_shelljs);

var _argumentValidator = require('./argument-validator');

var _argumentValidator2 = _interopRequireDefault(_argumentValidator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var command = process.argv[2];
var arg1 = process.argv[3];
var arg2 = process.argv[4];

if ((0, _argumentValidator2.default)(command, 'help')) {
  console.log('YOU NEED HELP like this', command);
}

// shell.cp(`~/.spells/${templateName}`, `${process.env.PWD}/${newFile}`)