'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (src, target) {
  if (src.length !== target.length) return false;
  var tArray = target.split('');
  var filtered = tArray.filter(function (l, i) {
    if (src[i] === l) {
      return l;
    } else if (src[i] === l.toUpperCase()) {
      return l;
    }
  });
  return filtered.length === src.length;
};