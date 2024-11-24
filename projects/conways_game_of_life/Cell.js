class Cell {
  constructor(alive) {
    this.alive = alive;
  }

  countNeighbours(neighbours) {
    let count = 0;
    for (let neighbour of neighbours) {
      if (neighbour.alive) {
        count++;
      }
    }
    return count;
  }

  updateState(neighbours) {
    let neighboursCount = this.countNeighbours(neighbours);
    // console.log(neighboursCount);
    if (neighboursCount === 3) {
      return true; // born
    } else if (neighboursCount > 3 || neighboursCount < 2) {
      return false; // over/underpopulation
    }
    return this.alive; // remains the same
  }
}
