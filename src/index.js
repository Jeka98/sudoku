module.exports = function solveSudoku(matrix) {
  let solvedMatrix = matrix;
  
  if (solved(matrix)) {
    solvedMarix = matrix;
  }
  
  return solvedMatrix;
}
  
function solved (matrix) {
  let cell = [];
  if (!findEmpty(matrix, cell)) {
    return true;
  }
  let row = cell[0];
  let col = cell[1];
  for (let num = 1; num < 10; num++) {
    if (!checkRow(matrix, row, num) && !checkCol(matrix, col, num) && !checkBox(matrix, row - row % 3, col - col % 3, num)) {
      matrix[row][col] = num;
      if(solved(matrix)) {
        return true;
      }
      matrix[row][col] = 0;
    }
  }
  return false;
}

function findEmpty(matrix, cell) {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (matrix[i][j] === 0) {
        cell[0] = i;
        cell[1] = j;
        return true;
      }
    }
  }
  return false;
}

function checkRow(matrix, row, num) {
  for (let i = 0; i < 9; i++) {
    if (matrix[row][i] === num) {
      return true;
    }
  }
  return false;
}

function checkCol(matrix, col, num) {
  for (let i = 0; i < 9; i++) {
    if (matrix[i][col] === num) {
      return true;
    }
  }
  return false;
}

function checkBox(matrix, row, col, num) {
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (matrix[i + row][j + col] === num) {
        return true;
      }
    }
  }
  return false;
}
