function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  loadPixels();
  var count = 0;
  noiseDetail(16);
  for (var n = 0; n < 10000; n++) {
    // Use height instead of windowHeight
    var x = floor(random(0, windowWidth));
    var y = floor(random(0, windowHeight));
    var index = (x + y * width) * 4;

    var noise_factor = noise(x * 0.004, y * 0.004) / 3 + 0.2;

    if (noise_factor * random(0, 1) > 0.2) {
      pixels[index] = 0;
      pixels[index + 1] = 0;
      pixels[index + 2] = 0;
      pixels[index + 3] = 255;
      count++;
    }
  }
  updatePixels();
}
