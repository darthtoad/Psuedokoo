# Psuedokoo
#### Sudoku checker web app made with jQuery

#### By _**Sam Gespass and Danyel Murray**_

## Description

_This app allows a user to check if a sudoku is correct. It also offers a few preset sudoku puzzles._

## Specs

| Spec | Input | Output |
| :-------------     | :------------- | :------------- |
| It should return false if too few squares are filled | var badSudoku = new Sudoku([1], [2], [3], [4], [5], [6], [7], [8], [9]); | false |
| It should return false if there are too many sqares filled | new Sudoku([1, 2, 3, 4, 5, 6, 7, 23, 5, 445, 45, 5], [111, 222, 3333, 444, 555, 666, 777, 888, 999, 4343], [1212, 1221122112, 122112, 122112, 344534, 654645, 23435521, 214353, 234234, 2353252342, 234324], [90000, 8000, 7000, 60000, 4000, 5000, 3000, 2000, 1000, 666], [99, 88, 77, 66, 55, 44, 33, 22, 11, 8, 9], [3232, 3232323, 32333232323, 3333222323, 11111, 22222, 33333, 44444, 66666666666, 66666665, 443213552], [-1, -2, -3, -4, -5, -6, -7, -9, -10, -18, -111], [42424, 42, 424242424242, 24242424242, 24, 867, 5309, 37, 3777, 420, 4200], [710, 420710, 17203, 55585604, 7986405, 888888888888, 5452112111111111, 21111111000, 900000000000000, 10000000000000000]); | false |
| It should return true if all squares, rows, and columns only have unique numbers | new Sudoku([7, 3, 5, 6, 1, 4, 8, 9, 2], [8, 4, 2, 9, 7, 3, 5, 6, 1], [9, 6, 1, 2, 8, 5, 3, 7, 4], [2, 8, 6, 3, 4, 9, 1, 5, 7], [4, 1, 3, 8, 5, 7, 9, 2, 6], [5, 7, 9, 1, 2, 6, 4, 3, 8], [1, 5, 7, 4, 9, 2, 6, 8, 3], [6, 9, 4, 7, 3, 8, 2, 1, 5], [3, 2, 8, 5, 6, 1, 7, 4, 9]); | true |
| It should return false if all squares, rows, and columns have repeat numbers | new Sudoku([1, 2, 3, 4, 5, 6, 7, 8, 9], [2, 2, 2, 3, 5, 7, 8, 9], [2, 2, 2, 3, 5, 7, 8, 9], [2, 2, 2, 3, 5, 7, 8, 9], [2, 2, 2, 3, 5, 7, 8, 9], [2, 2, 2, 3, 5, 7, 8, 9], [2, 2, 2, 3, 5, 7, 8, 9], [2, 2, 2, 3, 5, 7, 8, 9], [2, 2, 2, 3, 5, 7, 8, 9]); | false |

## Setup/Installation Requirements

* Click on the following [link](https://github.com/darthtoad/psuedokoo) to download Psuedokoo
* Go to the directory you downloaded Psuedokoo to in the terminal
* Run npm install in the terminal
* Run bower install in the terminal
* Run gulp build in the terminal
* Finally, run gulp serve in the terminal. A browser window should open in localhost:3000.

## Known Bugs

_There are no known bugs. If you find any, please [message](mailto:darth.toad@gmail.com) me._

## Technologies Used

* _Javascript_
* _CSS_
* _HTML_
* _Atom_
* _Gulp_
* _Bower_
* _Git_
* _GitHub_

### License

Copyright (c) 2017 ****_Sam Gespass_****

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
