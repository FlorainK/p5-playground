const rows = 50;
const columns = 50;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);

  for (var r = 0; r < rows; r++) {
    for (var c = 0; c < rows; c++) {
      let v = createVector(20, 20);

      noise_factor = noise(r * 0.05, c * 0.05);
      v.rotate(noise_factor * TWO_PI);
      line(
        (windowWidth * c) / columns,
        (windowHeight * r) / rows,
        (windowWidth * c) / columns + v.x,
        (windowHeight * r) / rows + v.y
      );
    }
  }
  noLoop();
}
