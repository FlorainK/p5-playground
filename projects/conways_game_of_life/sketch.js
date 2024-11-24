var lifeMatrix = [];
var NUMROWS = 5;
var NUMCOLUMNS = 5;

function setup() {
  for (let row = 0; row < NUMROWS; row++) {
    lifeMatrix.push([]);
    for (let column = 0; column < NUMCOLUMNS; column++) {
      lifeMatrix[row].push(new Cell(Math.random() < 0.5));
    }
  }
}

function getNeighbours(matrix, row, column, numRows, numColumns) {
  let neighbours = [];
  // top row
  if (row > 0) {
    neighbours.push(matrix[row - 1][column]);
    if (column > 0) {
      neighbours.push(matrix[row - 1][column - 1]);
    }
    if (column < numColumns - 1) {
      neighbours.push(matrix[row - 1][column + 1]);
    }
  }
  // same row
  if (column > 0) {
    neighbours.push(matrix[row][column - 1]);
  }
  if (column < numColumns - 1) {
    neighbours.push(matrix[row][column + 1]);
  }
  // bottom row
  if (row < numRows - 1) {
    neighbours.push(matrix[row + 1][column]);
    if (column > 0) {
      neighbours.push(matrix[row + 1][column - 1]);
    }
    if (column < numColumns - 1) {
      neighbours.push(matrix[row + 1][column + 1]);
    }
  }
  return neighbours;
}

function draw() {
  frameRate(1);
  let newMatrix = [];
  for (let row = 0; row < NUMROWS; row++) {
    newMatrix.push([]);
    for (let column = 0; column < NUMCOLUMNS; column++) {
      let neighbours = getNeighbours(
        lifeMatrix,
        row,
        column,
        NUMROWS,
        NUMCOLUMNS
      );
      newMatrix[row].push(
        new Cell(lifeMatrix[row][column].updateState(neighbours))
      );
    }
  }
  lifeMatrix = newMatrix;
  let aliveMatrix = lifeMatrix.map((row) => row.map((cell) => cell.alive));
  console.log(aliveMatrix);
}
