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

  //  let x = 0;

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
    event.preventDefault();
    alert("hello world!");
  });

  $('#selection-form').submit(function (event) {
    event.preventDefault();
    var puzzle = $("#puzzle option:selected").text();
    console.log(puzzle);
    if (puzzle === "Puzzle 1") {
      $("#sudoku-form").empty();
      $("#sudoku-form").append('<div class="row">' + '<div class="col-xs-1">' + '<input type="number" name="1a" id="1a"> ' + '<input type="number" name="1b" id="1b"> ' + '<input type="number" name="1c" id="1c" placeholder="9" value="9" disabled> ' + ' | ' + '<input type="number" name="1d" id="1d"> ' + '<input type="number" name="1e" id="1e"> ' + '<input type="number" name="1f" id="1f" placeholder="2" value="2" disabled> ' + ' | ' + '<input type="number" name="1g" id="1g"> ' + '<input type="number" name="1h" id="1h" placeholder="1" value="1" disabled> ' + '<input type="number" name="1i" id="1i"> ' + '</div> ' + '<div class="col-xs-1"> ' + '<input type="number" name="2a" id="2a"> ' + '<input type="number" name="2b" id="2b" placeholder="4" value="4" disabled> ' + '<input type="number" name="2c" id="2c"> ' + ' | ' + '<input type="number" name="2d" id="2d"> ' + '<input type="number" name="2e" id="2e"> ' + '<input type="number" name="2f" id="2f"> ' + ' | ' + '<input type="number" name="2g" id="2g" placeholder="2" value="2" disabled> ' + '<input type="number" name="2h" id="2h" placeholder="3" value="3" disabled> ' + '<input type="number" name="2i" id="2i"> ' + '</div> ' + '<div class="col-xs-1"> ' + '<input type="number" name="3a" id="3a" placeholder="8" value="8" disabled> ' + '<input type="number" name="3b" id="3b" placeholder="6" value="6" disabled> ' + '<input type="number" name="3c" id="3c"> ' + ' | ' + '<input type="number" name="3d" id="3d"> ' + '<input type="number" name="3e" id="3e" placeholder="7" value="7" disabled> ' + '<input type="number" name="3f" id="3f"> ' + ' | ' + '<input type="number" name="3g" id="3g" placeholder="5" value="5" disabled> ' + '<input type="number" name="3h" id="3h" placeholder="4" value="4" disabled> ' + '<input type="number" name="3i" id="3i"> ' + '</div> ' + '</div> ' + '<hr> ' + '<div class="row"> ' + '<div class="col-xs-1"> ' + '<input type="number" name="4a" id="4a" placeholder="9" value="9" disabled> ' + '<input type="number" name="4b" id="4b" placeholder="5" value="5" disabled> ' + '<input type="number" name="4c" id="4c"> ' + ' | ' + '<input type="number" name="4d" id="4d" placeholder="3" value="3" isabled> ' + '<input type="number" name="4e" id="4e"> ' + '<input type="number" name="4f" id="4f" placeholder="8" value="8" disabled> ' + ' | ' + '<input type="number" name="4g" id="4g"> ' + '<input type="number" name="4h" id="4h" placeholder="6" value="6" disabled> ' + '<input type="number" name="4i" id="4i" placeholder="1" value="1" disabled> ' + '</div> ' + '<div class="col-xs-1"> ' + '<input type="number" name="5a" id="5a"> ' + '<input type="number" name="5b" id="5b"> ' + '<input type="number" name="5c" id="5c"> ' + ' | ' + '<input type="number" name="5d" id="5d" placeholder="4" value="4" disabled> ' + '<input type="number" name="5e" id="5e"> ' + '<input type="number" name="5f" id="5f" placeholder="7" value="7" disabled> ' + ' | ' + '<input type="number" name="5g" id="5g"> ' + '<input type="number" name="5h" id="5h"> ' + '<input type="number" name="5i" id="5i"> ' + '</div> ' + '<div class="col-xs-1"> ' + '<input type="number" name="6a" id="6a" placeholder="7" value="7" disabled> ' + '<input type="number" name="6b" id="6b" placeholder="2" value="2" disabled> ' + '<input type="number" name="6c" id="6c"> ' + ' | ' + '<input type="number" name="6d" id="6d" placeholder="6" value="6" disabled> ' + '<input type="number" name="6e" id="6e"> ' + '<input type="number" name="6f" id="6f" placeholder="1" value="1" disabled> ' + ' | ' + '<input type="number" name="6g" id="6g"> ' + '<input type="number" name="6h" id="6h" placeholder="4" value="4" disabled> ' + '<input type="number" name="6i" id="6i" placeholder="5" value="5" disabled> ' + '</div> ' + '</div> ' + '<hr> ' + '<div class="row"> ' + '<div class="col-xs-1"> ' + '<input type="number" name="7a" id="7a" placeholder="2" value="2" disabled> ' + '<input type="number" name="7b" id="7b"> ' + '<input type="number" name="7c" id="7c" placeholder="5" value="5" disabled> ' + ' | ' + '<input type="number" name="7d" id="7d"> ' + '<input type="number" name="7e" id="7e" placeholder="3" value="3" disabled> ' + '<input type="number" name="7f" id="7f"> ' + ' | ' + '<input type="number" name="7g" id="7g" placeholder="8" value="8" disabled> ' + '<input type="number" name="7h" id="7h" placeholder="6" value="6" disabled> ' + '<input type="number" name="7i" id="7i"> ' + '</div> ' + '<div class="col-xs-1"> ' + '<input type="number" name="8a" id="8a"> ' + '<input type="number" name="8b" id="8b" placeholder="3" value="3" disabled> ' + '<input type="number" name="8c" id="8c" placeholder="8" value="8" disabled> ' + ' | ' + '<input type="number" name="8d" id="8d"> ' + '<input type="number" name="8e" id="8e"> ' + '<input type="number" name="8f" id="8f"> ' + ' | ' + '<input type="number" name="8g" id="8g"> ' + '<input type="number" name="8h" id="8h" placeholder="7" value="7" disabled> ' + '<input type="number" name="8i" id="8i"> ' + '</div> ' + '<div class="col-xs-1"> ' + '<input type="number" name="9a" id="9a"> ' + '<input type="number" name="9b" id="9b" placeholder="9" value="9" disabled> ' + '<input type="number" name="9c" id="9c"> ' + ' | ' + '<input type="number" name="9d" id="9d" placeholder="8" value="8" disabled> ' + '<input type="number" name="9e" id="9e"> ' + '<input type="number" name="9f" id="9f"> ' + ' | ' + '<input type="number" name="9g" id="9g" placeholder="3" value="3" disabled> ' + '<input type="number" name="9h" id="9h"> ' + '<input type="number" name="9i" id="9i"> ' + '</div> ' + '</div> ' + '<div class="row"> ' + '<button type="submit">Check!</button> ' + '</div>');
    } else if (puzzle === "Puzzle 2") {
      $("#sudoku-form").empty();
      $("#sudoku-form").append('<div class="row">' + '<div class="col-xs-1">' + '<input type="number" name="1a" id="1a" placeholder="1" value="1" disabled> ' + '<input type="number" name="1b" id="1b"> ' + '<input type="number" name="1c" id="1c" placeholder="5" value="5" disabled> ' + ' | ' + '<input type="number" name="1d" id="1d"> ' + '<input type="number" name="1e" id="1e" placeholder="6" value="6" disabled> ' + '<input type="number" name="1f" id="1f"> ' + ' | ' + '<input type="number" name="1g" id="1g"> ' + '<input type="number" name="1h" id="1h" placeholder="7" value="7" disabled> ' + '<input type="number" name="1i" id="1i"> ' + '</div> ' + '<div class="col-xs-1"> ' + '<input type="number" name="2a" id="2a"> ' + '<input type="number" name="2b" id="2b"> ' + '<input type="number" name="2c" id="2c"> ' + ' | ' + '<input type="number" name="2d" id="2d"> ' + '<input type="number" name="2e" id="2e" placeholder="9" value="9"> ' + '<input type="number" name="2f" id="2f" placeholder="2" value="2"> ' + ' | ' + '<input type="number" name="2g" id="2g"> ' + '<input type="number" name="2h" id="2h"> ' + '<input type="number" name="2i" id="2i"> ' + '</div> ' + '<div class="col-xs-1"> ' + '<input type="number" name="3a" id="3a" placeholder="6" value="6" disabled> ' + '<input type="number" name="3b" id="3b"> ' + '<input type="number" name="3c" id="3c"> ' + ' | ' + '<input type="number" name="3d" id="3d"> ' + '<input type="number" name="3e" id="3e"> ' + '<input type="number" name="3f" id="3f" placeholder="5" value="5" disabled> ' + ' | ' + '<input type="number" name="3g" id="3g" placeholder="1" value="1" disabled> ' + '<input type="number" name="3h" id="3h"> ' + '<input type="number" name="3i" id="3i"> ' + '</div> ' + '</div> ' + '<hr> ' + '<div class="row"> ' + '<div class="col-xs-1"> ' + '<input type="number" name="4a" id="4a"> ' + '<input type="number" name="4b" id="4b" placeholder="4" value="4" disabled> ' + '<input type="number" name="4c" id="4c"> ' + ' | ' + '<input type="number" name="4d" id="4d"> ' + '<input type="number" name="4e" id="4e"> ' + '<input type="number" name="4f" id="4f"> ' + ' | ' + '<input type="number" name="4g" id="4g"> ' + '<input type="number" name="4h" id="4h" placeholder="8" value="8" disabled> ' + '<input type="number" name="4i" id="4i"> ' + '</div> ' + '<div class="col-xs-1"> ' + '<input type="number" name="5a" id="5a"> ' + '<input type="number" name="5b" id="5b"> ' + '<input type="number" name="5c" id="5c" placeholder="3" value="3" disabled> ' + ' | ' + '<input type="number" name="5d" id="5d"> ' + '<input type="number" name="5e" id="5e" placeholder="5" value="5" disabled> ' + '<input type="number" name="5f" id="5f"> ' + ' | ' + '<input type="number" name="5g" id="5g" placeholder="7" value="7" disabled> ' + '<input type="number" name="5h" id="5h"> ' + '<input type="number" name="5i" id="5i"> ' + '</div> ' + '<div class="col-xs-1"> ' + '<input type="number" name="6a" id="6a"> ' + '<input type="number" name="6b" id="6b" placeholder="8" value="8" disabled> ' + '<input type="number" name="6c" id="6c"> ' + ' | ' + '<input type="number" name="6d" id="6d"> ' + '<input type="number" name="6e" id="6e"> ' + '<input type="number" name="6f" id="6f"> ' + ' | ' + '<input type="number" name="6g" id="6g"> ' + '<input type="number" name="6h" id="6h" placeholder="3" value="3" disabled> ' + '<input type="number" name="6i" id="6i"> ' + '</div> ' + '</div> ' + '<hr> ' + '<div class="row"> ' + '<div class="col-xs-1"> ' + '<input type="number" name="7a" id="7a"> ' + '<input type="number" name="7b" id="7b"> ' + '<input type="number" name="7c" id="7c" placeholder="7" value="7" disabled> ' + ' | ' + '<input type="number" name="7d" id="7d" placeholder="3" value="3" disabled> ' + '<input type="number" name="7e" id="7e"> ' + '<input type="number" name="7f" id="7f"> ' + ' | ' + '<input type="number" name="7g" id="7g"> ' + '<input type="number" name="7h" id="7h"> ' + '<input type="number" name="7i" id="7i" placeholder="2" value="2"> ' + '</div> ' + '<div class="col-xs-1"> ' + '<input type="number" name="8a" id="8a"> ' + '<input type="number" name="8b" id="8b"> ' + '<input type="number" name="8c" id="8c"> ' + ' | ' + '<input type="number" name="8d" id="8d" placeholder="5" value="5"> ' + '<input type="number" name="8e" id="8e" placeholder="7" value="7"> ' + '<input type="number" name="8f" id="8f"> ' + ' | ' + '<input type="number" name="8g" id="8g"> ' + '<input type="number" name="8h" id="8h"> ' + '<input type="number" name="8i" id="8i"> ' + '</div> ' + '<div class="col-xs-1"> ' + '<input type="number" name="9a" id="9a"> ' + '<input type="number" name="9b" id="9b" placeholder="9" value="9" disabled> ' + '<input type="number" name="9c" id="9c"> ' + ' | ' + '<input type="number" name="9d" id="9d"> ' + '<input type="number" name="9e" id="9e" placeholder="1" value="1" disabled> ' + '<input type="number" name="9f" id="9f"> ' + ' | ' + '<input type="number" name="9g" id="9g" placeholder="4" value="4" disabled> ' + '<input type="number" name="9h" id="9h"> ' + '<input type="number" name="9i" id="9i" placeholder="7" value="7" disabled> ' + '</div> ' + '</div> ' + '<div class="row"> ' + '<button type="submit">Check!</button> ' + '</div>');
    } else {
      console.log("error");
    }
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

    // console.log(sudoku.check());

    if (sudoku.check()) {
      $('#result').append("<h2>You are correct!</h2>");
    } else {
      $('#result').append("<h2>Try again</h2>");
    }
  });
});

},{"./../js/scripts.js":1}]},{},[2]);
