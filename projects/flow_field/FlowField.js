class FlowField {
  constructor(noise, width, height) {
    this.base_noise = noise;
    this.width = width;
    this.height = height;

    this.matrix = new Array(width);
    for (let i = 0; i < width; i++) {
      this.matrix[i] = new Array(height).fill(null);
    }
  }

  getVector(x, y) {
    if (this.matrix[y][x] != null) {
      return this.matrix[y][x];
    } else {
      let v = createVector(10, 10);
      let noise_factor = this.base_noise(y * 0.1, y * 0.1, offset);
      v.rotate(noise_factor * TWO_PI);
      this.matrix[y][x] = v;
      return v;
    }
  }
}
