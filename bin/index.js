#!/usr/bin/env node
'use strict';

var _shelljs = require('shelljs');

var _shelljs2 = _interopRequireDefault(_shelljs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var command = process.argv[2];
var arg1 = process.argv[3];
var arg2 = process.argv[4];
console.log('command', command);
console.log('arg1', arg1);
console.log('arg2', arg2);
console.log(process.env.PWD);

function deepCompare(src, target) {
  var tArray = target.split('');
  if (src.length !== target.length) {
    return false;
  }
  var filtered = tArray.filter(function (l, i) {
    if (src[i] === l) {
      return l;
    } else if (src[i] === l.toUpperCase()) {
      return l;
    }
  });
  if (filtered.length === src.length) {
    return true;
  }
}

if (deepCompare(command, 'help')) {
  console.log('YOU NEED HELP like this', command);
}

// shell.cp(`~/.spells/${templateName}`, `${process.env.PWD}/${newFile}`)