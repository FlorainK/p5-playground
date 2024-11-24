class Cell {
  constructor(alive) {
    this.alive = alive;
    this.nextState = alive;
  }

  countNeighbours(neighbours) {
    return neighbours.filter((neighbor) => neighbor.alive).length;
  }

  calculateNextState(neighbours) {
    let neighboursCount = this.countNeighbours(neighbours);
    if (this.alive) {
      this.nextState = neighboursCount === 2 || neighboursCount === 3; // Survive
    } else {
      this.nextState = neighboursCount === 3; // Reproduce
    }
  }

  applyNextState() {
    this.alive = this.nextState;
  }
}
