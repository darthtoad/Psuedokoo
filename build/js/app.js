(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Sudoku = exports.Sudoku = function () {
  function Sudoku(row1, row2, row3, row4, row5, row6, row7, row8, row9) {
    _classCallCheck(this, Sudoku);

    this.row1 = row1;
    this.row2 = row2;
    this.row3 = row3;
    this.row4 = row4;
    this.row5 = row5;
    this.row6 = row6;
    this.row7 = row7;
    this.row8 = row8;
    this.row9 = row9;
    this.bigArray = [row1, row2, row3, row4, row5, row6, row7, row8, row9];
  }

  //  var x = 0;

  _createClass(Sudoku, [{
    key: "check",
    value: function check() {
      var block1 = [];
      var block2 = [];
      var block3 = [];
      var block4 = [];
      var block5 = [];
      var block6 = [];
      var block7 = [];
      var block8 = [];
      var block9 = [];
      var col1 = [];
      var col2 = [];
      var col3 = [];
      var col4 = [];
      var col5 = [];
      var col6 = [];
      var col7 = [];
      var col8 = [];
      var col9 = [];
      var i = 0;
      var boolean = true;

      this.bigArray.forEach(function (arrayThis) {
        i++;
        if (arrayThis.length !== 9) {
          boolean = false;
        } else if (new Set(arrayThis).size !== arrayThis.length) {
          boolean = false;
        } else {
          var j = 0;
          arrayThis.forEach(function (num) {
            // debugger;
            j++;
            if ((i === 1 || i === 2 || i === 3) && j === 1) {
              block1.push(arrayThis[0]);
              col1.push(arrayThis[0]);
            } else if ((i === 1 || i === 2 || i === 3) && j === 2) {
              block1.push(arrayThis[1]);
              col2.push(arrayThis[1]);
            } else if ((i === 1 || i === 2 || i === 3) && j === 3) {
              /*(block + i)*/block1.push(arrayThis[2]);
              col3.push(arrayThis[2]);
            } else if ((i === 1 || i === 2 || i === 3) && j === 4) {
              block2.push(arrayThis[3]);
              col4.push(arrayThis[3]);
            } else if ((i === 1 || i === 2 || i === 3) && j === 5) {
              block2.push(arrayThis[4]);
              col5.push(arrayThis[4]);
            } else if ((i === 1 || i === 2 || i === 3) && j === 6) {
              block2.push(arrayThis[5]);
              col6.push(arrayThis[5]);
            } else if ((i === 1 || i === 2 || i === 3) && j === 7) {
              block3.push(arrayThis[6]);
              col7.push(arrayThis[6]);
            } else if ((i === 1 || i === 2 || i === 3) && j === 8) {
              block3.push(arrayThis[7]);
              col8.push(arrayThis[7]);
            } else if ((i === 1 || i === 2 || i === 3) && j === 9) {
              block3.push(arrayThis[8]);
              col9.push(arrayThis[8]);
            } else if ((i === 4 || i === 5 || i === 6) && j === 1) {
              block4.push(arrayThis[0]);
              col1.push(arrayThis[0]);
            } else if ((i === 4 || i === 5 || i === 6) && j === 2) {
              block4.push(arrayThis[1]);
              col2.push(arrayThis[1]);
            } else if ((i === 4 || i === 5 || i === 6) && j === 3) {
              block4.push(arrayThis[2]);
              col3.push(arrayThis[2]);
            } else if ((i === 4 || i === 5 || i === 6) && j === 4) {
              block5.push(arrayThis[3]);
              col4.push(arrayThis[3]);
            } else if ((i === 4 || i === 5 || i === 6) && j === 5) {
              block5.push(arrayThis[4]);
              col5.push(arrayThis[4]);
            } else if ((i === 4 || i === 5 || i === 6) && j === 6) {
              block5.push(arrayThis[5]);
              col6.push(arrayThis[5]);
            } else if ((i === 4 || i === 5 || i === 6) && j === 7) {
              block6.push(arrayThis[6]);
              col7.push(arrayThis[6]);
            } else if ((i === 4 || i === 5 || i === 6) && j === 8) {
              block6.push(arrayThis[7]);
              col8.push(arrayThis[7]);
            } else if ((i === 4 || i === 5 || i === 6) && j === 9) {
              block6.push(arrayThis[8]);
              col9.push(arrayThis[8]);
            } else if ((i === 7 || i === 8 || i === 9) && j === 1) {
              block7.push(arrayThis[0]);
              col1.push(arrayThis[0]);
            } else if ((i === 7 || i === 8 || i === 9) && j === 2) {
              block7.push(arrayThis[1]);
              col2.push(arrayThis[1]);
            } else if ((i === 7 || i === 8 || i === 9) && j === 3) {
              block7.push(arrayThis[2]);
              col3.push(arrayThis[2]);
            } else if ((i === 7 || i === 8 || i === 9) && j === 4) {
              block8.push(arrayThis[3]);
              col4.push(arrayThis[3]);
            } else if ((i === 7 || i === 8 || i === 9) && j === 5) {
              block8.push(arrayThis[4]);
              col5.push(arrayThis[4]);
            } else if ((i === 7 || i === 8 || i === 9) && j === 6) {
              block8.push(arrayThis[5]);
              col6.push(arrayThis[5]);
            } else if ((i === 7 || i === 8 || i === 9) && j === 7) {
              block9.push(arrayThis[6]);
              col7.push(arrayThis[6]);
            } else if ((i === 7 || i === 8 || i === 9) && j === 8) {
              block9.push(arrayThis[7]);
              col8.push(arrayThis[7]);
            } else if ((i === 7 || i === 8 || i === 9) && j === 9) {
              block9.push(arrayThis[8]);
              col9.push(arrayThis[8]);
            } else if (new Set(block1).size !== block1.length) {
              boolean = false;
            } else if (new Set(block2).size !== block2.length) {
              boolean = false;
            } else if (new Set(block3).size !== block3.length) {
              boolean = false;
            } else if (new Set(block4).size !== block4.length) {
              boolean = false;
            } else if (new Set(block5).size !== block5.length) {
              boolean = false;
            } else if (new Set(block6).size !== block6.length) {
              boolean = false;
            } else if (new Set(block7).size !== block7.length) {
              boolean = false;
            } else if (new Set(block8).size !== block8.length) {
              boolean = false;
            } else if (new Set(block9).size !== block9.length) {
              boolean = false;
            } else if (new Set(col1).size !== col1.length) {
              boolean = false;
            } else if (new Set(col2).size !== col2.length) {
              boolean = false;
            } else if (new Set(col3).size !== col3.length) {
              boolean = false;
            } else if (new Set(col4).size !== col4.length) {
              boolean = false;
            } else if (new Set(col5).size !== col5.length) {
              boolean = false;
            } else if (new Set(col6).size !== col6.length) {
              boolean = false;
            } else if (new Set(col7).size !== col7.length) {
              boolean = false;
            } else if (new Set(col8).size !== col8.length) {
              boolean = false;
            } else if (new Set(col9).size !== col9.length) {
              boolean = false;
            } else {
              boolean = true;
              alert("success");
            }
          });
        }
      });
      return boolean;
    }
  }]);

  return Sudoku;
}();

},{}],2:[function(require,module,exports){
"use strict";

var _scripts = require("./../js/scripts.js");

$(document).ready(function () {
  // $('#selection-form').submit(function(event){
  //   event.preventDefault();
  //   var input = parseInt($("select").val());
  //   if (input === 1) {
  //
  //   } else if (input === 2) {
  //
  //   } else {
  //
  //   }
  // })
  alert("blah");
  $('#test').submit(function (event) {
    alert("hello world!");
  });
  $('#sudoku-form').submit(function (event) {
    event.preventDefault();
    $('#result').empty();
    var row1 = [$('#1a').val(), $('#1b').val(), $('#1c').val(), $('#1d').val(), $('#1e').val(), $('#1f').val(), $('#1g').val(), $('#1h').val(), $('#1i').val()];

    var row2 = [$('#2a').val(), $('#2b').val(), $('#2c').val(), $('#2d').val(), $('#2e').val(), $('#2f').val(), $('#2g').val(), $('#2h').val(), $('#2i').val()];

    var row3 = [$('#3a').val(), $('#3b').val(), $('#3c').val(), $('#3d').val(), $('#3e').val(), $('#3f').val(), $('#3g').val(), $('#3h').val(), $('#3i').val()];

    var row4 = [$('#4a').val(), $('#4b').val(), $('#4c').val(), $('#4d').val(), $('#4e').val(), $('#4f').val(), $('#4g').val(), $('#4h').val(), $('#4i').val()];

    var row5 = [$('#5a').val(), $('#5b').val(), $('#5c').val(), $('#5d').val(), $('#5e').val(), $('#5f').val(), $('#5g').val(), $('#5h').val(), $('#5i').val()];

    var row6 = [$('#6a').val(), $('#6b').val(), $('#6c').val(), $('#6d').val(), $('#6e').val(), $('#6f').val(), $('#6g').val(), $('#6h').val(), $('#6i').val()];

    var row7 = [$('#7a').val(), $('#7b').val(), $('#7c').val(), $('#7d').val(), $('#7e').val(), $('#7f').val(), $('#7g').val(), $('#7h').val(), $('#7i').val()];

    var row8 = [$('#8a').val(), $('#8b').val(), $('#8c').val(), $('#8d').val(), $('#8e').val(), $('#8f').val(), $('#8g').val(), $('#8h').val(), $('#8i').val()];

    var row9 = [$('#9a').val(), $('#9b').val(), $('#9c').val(), $('#9d').val(), $('#9e').val(), $('#9f').val(), $('#9g').val(), $('#9h').val(), $('#9i').val()];

    var sudoku = new _scripts.Sudoku(row1, row2, row3, row4, row5, row6, row7, row8, row9);

    console.log(sudoku.check());

    if (sudoku.check()) {
      $('#result').append("<h2>You are correct!</h2>");
    } else {
      $('#result').append("<h2>Try again</h2>");
    }
  });
});

},{"./../js/scripts.js":1}]},{},[2]);
