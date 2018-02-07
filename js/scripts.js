export class Sudoku {

  constructor(row1, row2, row3, row4, row5, row6, row7, row8, row9) {
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

  check() {
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

    this.bigArray.forEach(function(arrayThis){
      i++;
      if (arrayThis.length !== 9) {
        boolean = false;
      } else if ((new Set(arrayThis)).size !== arrayThis.length) {
        boolean = false;
      } else {
        var j = 0;
        arrayThis.forEach(function(num){
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
          } else if ((new Set(block1)).size !== block1.length) {
            boolean = false;
          } else if ((new Set(block2)).size !== block2.length) {
            boolean = false;
          } else if ((new Set(block3)).size !== block3.length) {
            boolean = false;
          } else if ((new Set(block4)).size !== block4.length) {
            boolean = false;
          } else if ((new Set(block5)).size !== block5.length) {
            boolean = false;
          } else if ((new Set(block6)).size !== block6.length) {
            boolean = false;
          } else if ((new Set(block7)).size !== block7.length) {
            boolean = false;
          } else if ((new Set(block8)).size !== block8.length) {
            boolean = false;
          } else if ((new Set(block9)).size !== block9.length) {
            boolean = false;
          } else if ((new Set(col1)).size !== col1.length) {
            boolean = false;
          } else if ((new Set(col2)).size !== col2.length) {
            boolean = false;
          } else if ((new Set(col3)).size !== col3.length) {
            boolean = false;
          } else if ((new Set(col4)).size !== col4.length) {
            boolean = false;
          } else if ((new Set(col5)).size !== col5.length) {
            boolean = false;
          } else if ((new Set(col6)).size !== col6.length) {
            boolean = false;
          } else if ((new Set(col7)).size !== col7.length) {
            boolean = false;
          } else if ((new Set(col8)).size !== col8.length) {
            boolean = false;
          } else if ((new Set(col9)).size !== col9.length) {
            boolean = false;
          } else {
            boolean = true;
            alert("success");
          }
        })
      }
    })
    return boolean;
  };
}
