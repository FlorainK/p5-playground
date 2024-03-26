class Logo {
  constructor(top_left_corner, bottom_right_corner, radius) {
    this.top_left_corner = top_left_corner;
    this.bottom_right_corner = bottom_right_corner;
    this.center = [
      top_left_corner[0] + (bottom_right_corner[0] - top_left_corner[0]) / 2,
      top_left_corner[1] + (bottom_right_corner[1] - top_left_corner[1]) / 2,
    ];
    this.direction = [random(-5, 5), random(-5, 5)];
    this.speed = 1.5;
    this.radius = radius;
  }

  move() {
    this.center[0] += this.speed * this.direction[0];
    this.center[1] += this.speed * this.direction[1];
    // x bounce
    if (
      this.center[0] + this.radius > this.bottom_right_corner[0] ||
      this.center[0] - this.radius < this.top_left_corner[0]
    ) {
      this.direction[0] *= -1;
    }
    // y bounce
    if (
      this.center[1] + this.radius > this.bottom_right_corner[1] ||
      this.center[1] - this.radius < this.top_left_corner[1]
    ) {
      this.direction[1] *= -1;
    }
  }

  show() {
    circle(this.center[0], this.center[1], this.radius);
  }
}
