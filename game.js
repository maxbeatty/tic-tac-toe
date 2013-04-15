/*

tic tac toe

game rules

- two players
- x's and o's (doesn't really matter)

win:

 - match across
 - match down
 - match diagonal

*/

function validSquare(squareValue) {
  return squareValue.length > 0;
}

function checkAcross() {
  var rows = document.getElementsByClassName('row');

  for(var i=0; i < rows.length; i++) {
    var squaresInRow = rows[i].getElementsByTagName('input'),
        firstVal = squaresInRow[0].value,
        matchingRow = true;

    for(var j=1; j < squaresInRow.length; j++) {
      if (!validSquare(squaresInRow[j].value) || squaresInRow[j].value !== firstVal) {
        matchingRow = false;
        break;
      }
    }

    if (matchingRow) {
      return matchingRow;
    }
  }

  return false;
}

function checkDown() {
  // check columns for matches
  var cols = Math.sqrt(squares.length);

  for(var i=0; i < cols; i++) {
    if (validSquare(squares[i].value) && squares[i].value === squares[i+cols].value && squares[i+cols].value === squares[i+cols+cols].value) {
      return true;
    }
  }

  return false;
}

function checkDiag() {
  // check diagonals for matches

  // where are the corners?
  // [0,0],
  // [0,cols-1],
  // [cols-1, 0],
  // [cols-1, cols-1]

  // where is the middle?
  // ceil(cols / 2)

  var cols = Math.sqrt(squares.length),
      middleValue = squares[cols+1].value;

  if (validSquare(middleValue)) {
    if ((squares[0].value === middleValue && squares[squares.length-1].value === middleValue) || (squares[cols-1].value === middleValue && squares[cols+cols].value === middleValue)) {
      return true;
    }
  }

  return false;
}

function checkWin(e) {
  var lastPlay = e.target.value.toUpperCase();

  if(checkAcross() || checkDown() || checkDiag()) {
    console.log('Winner!');
    return true;
  }

  return false;
}

// squares in board
var squares = document.getElementsByTagName('input');

// listen for moves
for(var i=0; i < squares.length; i++) {
  squares[i].addEventListener('keyup', checkWin);
}
