class Particle {
  constructor(row_count, column_count, trace_length) {
    this.positions = [];
    this.trace_length = trace_length;
    this.row_count = row_count;
    this.column_count = column_count;
    this.positions[0] = createVector(
      random(0, windowWidth),
      random(0, windowHeight)
    );
    this.direction = p5.Vector.random2D(random(0, TWO_PI)).setMag(10);
  }

  update_direction(flowfield) {
    var row = floor((this.positions[0].x / displayWidth) * this.row_count);
    var column = floor(
      (this.positions[0].y / displayHeight) * this.column_count
    );
    var influence_vector = flowfield.getVector(row, column).mult(0.2);
    this.direction.mult(0.8);
    this.direction.add(influence_vector);
  }

  update(flowfield) {
    this.check_borders();
    this.update_direction(flowfield);
    this.add_position(this.direction.copy().add(this.positions[0]));
  }

  add_position(vec) {
    if (this.positions.unshift(vec) > this.trace_length) {
      this.positions.pop();
    }
  }

  check_borders() {
    var needs_reset = false;

    var current_position = this.positions[0].copy();

    // Check x
    if (current_position.x > displayWidth) {
      current_position.x = 0;
      needs_reset = true;
    } else if (current_position.x < 0) {
      current_position.x = displayWidth - 1;
      needs_reset = true;
    }
    // Check y
    if (current_position.y > windowHeight) {
      current_position.y = 0;
      needs_reset = true;
    } else if (current_position.y < 0) {
      current_position.y = windowHeight - 1;
      needs_reset = true;
    }

    if (needs_reset) {
      this.positions.splice(0, 0, current_position, false);
    }
  }

  show() {
    for (var i = 0; i < this.positions.length - 1; i++) {
      // Skip drawing if discontinuity marker is found
      if (this.positions[i] === false || this.positions[i + 1] === false) {
        continue;
      }
      stroke(0, 50); // Set stroke color with transparency (127 out of 255 is 0.5)
      strokeWeight(0.4);
      line(
        this.positions[i].x,
        this.positions[i].y,
        this.positions[i + 1].x,
        this.positions[i + 1].y
      );
    }
  }
}
