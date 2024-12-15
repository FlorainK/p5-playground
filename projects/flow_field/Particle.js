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
    this.direction = createVector(0, 0);
  }

  update_direction(flowfield) {
    var row = floor((this.positions[0].x / displayWidth) * this.row_count);
    var column = floor(
      (this.positions[0].y / displayHeight) * this.column_count
    );
    var influence_vector = flowfield[row][column].mult(0.3);
    this.direction.mult(0.7);
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
    //   if one dimension hits a border and gets reset, we must remark to not draw a line
    var needs_update = false;

    var current_position = this.positions[0];

    //   check x
    if (current_position.x > displayWidth) {
      needs_update = true;
      current_position.x = 0;
    } else if (current_position.x < 0) {
      needs_update = true;
      current_position.x = windowWidth;
    }
    //   check y
    if (current_position.y > windowHeight) {
      needs_update = true;
      current_position.y = 0;
    } else if (current_position.y < 0) {
      needs_update = true;
      current_position.y = windowHeight;
    }

    if (needs_update) {
      //   this.add_position(false);
      this.add_position(current_position);
    }
  }

  show() {
    for (var i = 0; i < this.positions.length - 1; i++) {
      if (this.positions[i] != false || this.positions[i + 1] != false) {
        line(
          this.positions[i].x,
          this.positions[i].y,
          this.positions[i + 1].x,
          this.positions[i + 1].y
        );
      }
    }
    // console.log(this.positions);
  }
}
