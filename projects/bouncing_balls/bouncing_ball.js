class BouncingBall {
  constructor(top_left_corner, bottom_right_corner, y) {
    // 100 y == furthest away
    // 0 y == close
    this.y = y;

    this.top_left_corner = top_left_corner;
    this.bottom_right_corner = bottom_right_corner;
    this.center = [
      top_left_corner[0] + (bottom_right_corner[0] - top_left_corner[0]) / 2,
      top_left_corner[1] + (bottom_right_corner[1] - top_left_corner[1]) / 2,
    ];

    this.upperBound = map(y, 0, 100, 0, this.top_left_corner[1]);
    this.lowerBound = map(y, 0, 100, height, this.bottom_right_corner[1]);

    this.leftBound = map(y, 0, 100, 0, this.top_left_corner[0]);
    this.rightBound = map(y, 0, 100, width, bottom_right_corner[0]);

    this.direction = [random(-5, 5), random(-5, 5)];
    let l = abs(this.direction[0]) + abs(this.direction[1]);
    this.direction[0] /= l;
    this.direction[1] /= l;
    this.speed = map(y, 0, 100, 30, 5);
    this.radius = map(y, 0, 100, 60, 10);
  }

  move() {
    this.center[0] += this.speed * this.direction[0];
    this.center[1] += this.speed * this.direction[1];
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
  }

  show() {
    circle(this.center[0], this.center[1], this.radius);
  }
}
