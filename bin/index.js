#!/usr/bin/env node
'use strict';

var _shelljs = require('shelljs');

var _shelljs2 = _interopRequireDefault(_shelljs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var templateName = process.argv[2];
var word = process.argv[3];
var newFile = process.argv[4];
console.log(process.env.PWD);

_shelljs2.default.cp('~/.spells/' + templateName, process.env.PWD + '/' + newFile);