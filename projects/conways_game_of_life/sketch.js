var lifeMatrix = [];
var NUMROWS = 10;
var NUMCOLUMNS = 10;

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let row = 0; row < NUMROWS; row++) {
    lifeMatrix.push([]);
    for (let column = 0; column < NUMCOLUMNS; column++) {
      lifeMatrix[row].push(new Cell(random(0, 1) < 0.5));
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
function drawGrid(cells, cellSize) {
  let gridWidth = cells[0].length * cellSize;
  let gridHeight = cells.length * cellSize;
  let offsetX = (width - gridWidth) / 2;
  let offsetY = (height - gridHeight) / 2;

  for (let y = 0; y < cells.length; y++) {
    for (let x = 0; x < cells[y].length; x++) {
      let cell = cells[y][x];
      if (cell.alive) {
        fill(255, 255, 0); // Yellow for alive cells
      } else {
        fill(255); // White for dead cells
      }
      stroke(0);
      rect(offsetX + x * cellSize, offsetY + y * cellSize, cellSize, cellSize);
    }
  }
}

function draw() {
  frameRate(3);

  // Determine the next state for all cells
  for (let row = 0; row < NUMROWS; row++) {
    for (let column = 0; column < NUMCOLUMNS; column++) {
      let neighbours = getNeighbours(
        lifeMatrix,
        row,
        column,
        NUMROWS,
        NUMCOLUMNS
      );
      lifeMatrix[row][column].calculateNextState(neighbours);
    }
  }

  // Apply the next state for all cells
  for (let row = 0; row < NUMROWS; row++) {
    for (let column = 0; column < NUMCOLUMNS; column++) {
      lifeMatrix[row][column].applyNextState();
    }
  }

  // Draw the grid
  drawGrid(lifeMatrix, 30);
}
