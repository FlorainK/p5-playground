let pixel_count = 0;
let offset = 0;
pixels_per_frame = 30000;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  loadPixels();
  noiseDetail(16);
  for (var n = 0; n < pixels_per_frame; n++) {
    var x = floor(random(0, windowWidth));
    var y = floor(random(0, windowHeight));
    var index = (x + y * width) * 4;

    var noise_factor = noise(x * 0.004, y * 0.004, offset) + 0.1;

    if (noise_factor * random(0, 1) > 0.5) {
      pixels[index + 3] = pixels[index + 3] ^ 255;
    }
    offset += 0.002;
  }
  updatePixels();
}
