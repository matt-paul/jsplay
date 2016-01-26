"use strict";

var stupidNumberStream = {
  each: function each(callback) {
    setTimeout(function () {
      return callback(1);
    }, 1000);
    setTimeout(function () {
      return callback(2);
    }, 2000);
    setTimeout(function () {
      return callback(3);
    }, 3000);
  }
};

stupidNumberStream.each(console.log);