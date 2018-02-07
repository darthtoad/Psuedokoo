import { Sudoku } from "./../js/scripts.js";

describe('Sudoku', function(){

  it ('should return false if there are too few squares filled', function(){
    var badSudoku = new Sudoku([1], [2], [3], [4], [5], [6], [7], [8], [9]);
    expect(badSudoku.check()).toEqual(false);
  })

  it('should return false if there are too many sqares filled', function(){
    var badSudoku = new Sudoku([1, 2, 3, 4, 5, 6, 7, 23, 5, 445, 45, 5], [111, 222, 3333, 444, 555, 666, 777, 888, 999, 4343], [1212, 1221122112, 122112, 122112, 344534, 654645, 23435521, 214353, 234234, 2353252342, 234324], [90000, 8000, 7000, 60000, 4000, 5000, 3000, 2000, 1000, 666], [99, 88, 77, 66, 55, 44, 33, 22, 11, 8, 9], [3232, 3232323, 32333232323, 3333222323, 11111, 22222, 33333, 44444, 66666666666, 66666665, 443213552], [-1, -2, -3, -4, -5, -6, -7, -9, -10, -18, -111], [42424, 42, 424242424242, 24242424242, 24, 867, 5309, 37, 3777, 420, 4200], [710, 420710, 17203, 55585604, 7986405, 888888888888, 5452112111111111, 21111111000, 900000000000000, 10000000000000000])
    expect(badSudoku.check()).toEqual(false);
  })

  it('should return true if all squares, rows, and columns have no unique numbers', function(){
    var trueSudoku = new Sudoku([7, 3, 5, 6, 1, 4, 8, 9, 2], [8, 4, 2, 9, 7, 3, 5, 6, 1], [9, 6, 1, 2, 8, 5, 3, 7, 4], [2, 8, 6, 3, 4, 9, 1, 5, 7], [4, 1, 3, 8, 5, 7, 9, 2, 6], [5, 7, 9, 1, 2, 6, 4, 3, 8], [1, 5, 7, 4, 9, 2, 6, 8, 3], [6, 9, 4, 7, 3, 8, 2, 1, 5], [3, 2, 8, 5, 6, 1, 7, 4, 9]);
    expect(trueSudoku.check()).toEqual(true);
  })

  it('should return false if all squares, rows, and columns have unique numbers', function(){
    var falseSudoku = new Sudoku([1, 2, 3, 4, 5, 6, 7, 8, 9], [2, 2, 2, 3, 5, 7, 8, 9], [2, 2, 2, 3, 5, 7, 8, 9], [2, 2, 2, 3, 5, 7, 8, 9], [2, 2, 2, 3, 5, 7, 8, 9], [2, 2, 2, 3, 5, 7, 8, 9], [2, 2, 2, 3, 5, 7, 8, 9], [2, 2, 2, 3, 5, 7, 8, 9], [2, 2, 2, 3, 5, 7, 8, 9]);
    expect(falseSudoku.check()).toEqual(false);
  })
})
