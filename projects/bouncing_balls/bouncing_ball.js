class BouncingBall {
  constructor(top_left_corner, bottom_right_corner, y) {
    // 100 y == furthest away
    // 0 y == close

    this.backBound = 100;
    this.frontBound = 10;

    this.top_left_corner = top_left_corner;

    console.log("top left corner", this.top_left_corner);
    this.bottom_right_corner = bottom_right_corner;
    this.center = [
      top_left_corner[0] + (bottom_right_corner[0] - top_left_corner[0]) / 2,
      top_left_corner[1] + (bottom_right_corner[1] - top_left_corner[1]) / 2,
      10,
    ];

    this.direction = [random(-5, 5), random(-5, 5), random(-5, 5)];
    let l = abs(this.direction[0]) + abs(this.direction[1]);
    this.direction[0] /= l;
    this.direction[1] /= l;
    this.direction[2] = 5;
    this.updateRadius();
    this.updateSpeed();
    this.updateBoundaries();
  }

  updateBoundaries() {
    this.upperBound = map(
      this.center[2],
      this.frontBound,
      this.backBound,
      0,
      this.top_left_corner[1]
    );
    this.lowerBound = map(
      this.center[2],
      this.frontBound,
      this.backBound,
      height,
      this.bottom_right_corner[1]
    );

    this.leftBound = map(this.center[2], 10, 100, 0, this.top_left_corner[0]);
    this.rightBound = map(
      this.center[2],
      0,
      100,
      width,
      this.bottom_right_corner[0]
    );
    console.log("upper, lower Bound", this.upperBound, this.lowerBound);
  }

  updateSpeed() {
    this.speed = map(this.center[2], 10, 100, 30, 5);
  }

  updateRadius() {
    this.radius = map(this.center[2], 10, 100, 60, 10);
  }

  move() {
    // x bounce
    if (
      this.center[0] + this.radius > this.rightBound ||
      this.center[0] - this.radius < this.leftBound
    ) {
      this.direction[0] *= -1;
    }
    // y bounce
    if (
      this.center[1] + this.radius > this.lowerBound ||
      this.center[1] - this.radius < this.upperBound
    ) {
      this.direction[1] *= -1;
    }
    // z bounce
    if (this.center[2] > 100 || this.center[2] < 10) {
      this.direction[2] *= -1;
    }

    this.center[0] += this.speed * this.direction[0];
    this.center[1] += this.speed * this.direction[1];
    this.center[2] += this.speed * this.direction[2];

    this.updateRadius();
    // this.updateSpeed();
    this.updateBoundaries();
    console.log("center ", this.center);
  }

  show() {
    circle(this.center[0], this.center[1], this.radius);
  }
}
