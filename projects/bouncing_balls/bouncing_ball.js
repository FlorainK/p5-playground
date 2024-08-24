class BouncingBall {
  constructor(bottomLeft, rectWidth, rectHeight) {
    this.center = createVector(windowWidth / 2, windowHeight / 2, 5);
    this.direction = createVector(5, 5, 1);
    this.radius = 20;

    this.bottomLeft = bottomLeft;
    this.rectWidth = rectWidth;
    this.rectHeight = rectHeight;

    this.leftBorder = bottomLeft.x;
    this.bottomBorder = bottomLeft.y;
    this.rightBorder = bottomLeft.x + rectWidth;
    this.topBorder = bottomLeft.y + rectHeight;
  }

  move() {
    // move
    this.center = this.center.add(this.direction);
    this.checkBounces();
    this.updateRadius();
    this.updateBorders();
  }

  checkBounces() {
    // left
    if (this.center.x - this.radius < this.leftBorder) {
      this.direction.x *= -1;
    }
    // right
    else if (this.center.x + this.radius > this.rightBorder) {
      this.direction.x *= -1;
    }
    // bottom
    if (this.center.y - this.radius < this.bottomBorder) {
      this.direction.y *= -1;
    } else if (this.center.y + this.radius > this.topBorder) {
      this.direction.y *= -1;
    }

    // backbounce, 0 -> close; 100 -> far away
    if (this.center.z > 100) {
      this.direction.z *= -1;
      console.log("backbounce");
    } else if (this.center.z < 0) {
      this.direction.z *= -1;
    }
  }

  updateRadius() {
    this.radius = map(
      this.center.z,
      0 - this.direction.z,
      100 + this.direction.z,
      20,
      5
    );
  }

  updateBorders() {
    // leftborder
    this.leftBorder = map(
      this.center.z,
      0 - this.direction.z,
      100 + this.direction.z,
      0,
      bottomLeft.x
    );
  }
  show() {
    circle(this.center.x, this.center.y, this.radius);
  }
}
