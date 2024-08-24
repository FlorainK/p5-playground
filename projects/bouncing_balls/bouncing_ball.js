class BouncingBall {
  constructor(bottomLeft, rectWidth, rectHeight) {
    this.center = createVector(
      random(0, windowWidth),
      random(0, windowWidth),
      0
    );

    var x = random(1, 10);
    var y = random(1, 10);
    var z = random(0.01, 0.5);
    this.originDirection = createVector(x, y, z);
    this.direction = createVector(x, y, z);
    this.maxRadius = 80;

    this.bottomLeft = bottomLeft;
    this.rectWidth = rectWidth;
    this.rectHeight = rectHeight;

    this.updateRadius();
    this.updateBorders();
    this.updateSpeed();
  }

  move() {
    // move
    this.updateBorders();
    this.center = this.center.add(this.direction);
    this.checkBounces();
    this.updateRadius();
    this.updateSpeed();
  }

  checkBounces() {
    // left
    if (this.center.x - this.radius < this.leftBorder) {
      this.direction.x = abs(this.direction.x);
    }
    // right
    else if (this.center.x + this.radius > this.rightBorder) {
      this.direction.x = -1 * abs(this.direction.x);
    }
    // bottom
    if (this.center.y - this.radius < this.bottomBorder) {
      this.direction.y = abs(this.direction.y);
    }
    // top
    else if (this.center.y + this.radius > this.topBorder) {
      this.direction.y = -1 * abs(this.direction.y);
    }

    // backbounce, 0 -> close; 100 -> far away
    if (this.center.z > 100) {
      this.direction.z = -1 * abs(this.direction.z);
      console.log("backbounce", this.center.z, this.direction.z);
    } else if (this.center.z < 0) {
      this.direction.z = abs(this.direction.z);
      console.log("frontbounce", this.center.z, this.direction.z);
    }
  }

  updateRadius() {
    this.radius = map(
      this.center.z,
      0 - this.direction.z,
      100 + this.direction.z,
      this.maxRadius,
      5
    );
  }

  updateBorders() {
    this.leftBorder = map(this.center.z, 0, 100, 0, this.bottomLeft.x);
    this.bottomBorder = map(this.center.z, 0, 100, 0, this.bottomLeft.y);
    this.rightBorder = map(
      this.center.z,
      0,
      100,
      windowWidth,
      this.bottomLeft.x + rectWidth
    );
    this.topBorder = map(
      this.center.z,
      0,
      100,
      windowHeight,
      this.bottomLeft.y + this.rectHeight
    );
  }

  updateSpeed() {
    var factor = map(this.center.z, 0, 100, 1, 0.05, true);
    let newDirection = p5.Vector.mult(this.originDirection, factor);
    newDirection.x *= Math.sign(this.direction.x);
    newDirection.y *= Math.sign(this.direction.y);
    newDirection.z *= Math.sign(this.direction.z);
    this.direction = newDirection;
  }
  show() {
    circle(this.center.x, this.center.y, this.radius);
  }
}
