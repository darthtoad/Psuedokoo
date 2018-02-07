import { Sudoku } from "./../js/scripts.js";

$(document).ready(function(){
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
  $('#test').submit(function(event){
    alert("hello world!");
  })
  $('#sudoku-form').submit(function(event){
    event.preventDefault();
    $('#result').empty();
    const row1 = [$('#1a').val(), $('#1b').val(), $('#1c').val(), $('#1d').val(), $('#1e').val(), $('#1f').val(), $('#1g').val(), $('#1h').val(), $('#1i').val()];

    const row2 = [$('#2a').val(), $('#2b').val(), $('#2c').val(), $('#2d').val(), $('#2e').val(), $('#2f').val(), $('#2g').val(), $('#2h').val(), $('#2i').val()];

    const row3 = [$('#3a').val(), $('#3b').val(), $('#3c').val(), $('#3d').val(), $('#3e').val(), $('#3f').val(), $('#3g').val(), $('#3h').val(), $('#3i').val()];

    const row4 = [$('#4a').val(), $('#4b').val(), $('#4c').val(), $('#4d').val(), $('#4e').val(), $('#4f').val(), $('#4g').val(), $('#4h').val(), $('#4i').val()];

    const row5 = [$('#5a').val(), $('#5b').val(), $('#5c').val(), $('#5d').val(), $('#5e').val(), $('#5f').val(), $('#5g').val(), $('#5h').val(), $('#5i').val()];

    const row6 = [$('#6a').val(), $('#6b').val(), $('#6c').val(), $('#6d').val(), $('#6e').val(), $('#6f').val(), $('#6g').val(), $('#6h').val(), $('#6i').val()];

    const row7 = [$('#7a').val(), $('#7b').val(), $('#7c').val(), $('#7d').val(), $('#7e').val(), $('#7f').val(), $('#7g').val(), $('#7h').val(), $('#7i').val()];

    const row8 = [$('#8a').val(), $('#8b').val(), $('#8c').val(), $('#8d').val(), $('#8e').val(), $('#8f').val(), $('#8g').val(), $('#8h').val(), $('#8i').val()];

    const row9 = [$('#9a').val(), $('#9b').val(), $('#9c').val(), $('#9d').val(), $('#9e').val(), $('#9f').val(), $('#9g').val(), $('#9h').val(), $('#9i').val()];

    const sudoku = new Sudoku(row1, row2, row3, row4, row5, row6, row7, row8, row9);

    console.log(sudoku.check());

    if (sudoku.check()) {
      $('#result').append("<h2>You are correct!</h2>");
    } else {
      $('#result').append("<h2>Try again</h2>");
    }
  });
});
