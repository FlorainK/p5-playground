let pixel_count = 0;
let offset = 0;
let co = 255;
pixels_per_frame = 10000;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  loadPixels();
  noiseDetail(16);
  for (var n = 0; n < pixels_per_frame; n++) {
    // Use height instead of windowHeight
    var x = floor(random(0, windowWidth));
    var y = floor(random(0, windowHeight));
    var index = (x + y * width) * 4;

    var noise_factor = noise(x * 0.004, y * 0.004, offset) / 3 + 0.2;

    if (noise_factor * random(0, 1) > 0.2) {
      pixels[index] = 0;
      pixels[index + 1] = 0;
      pixels[index + 2] = 0;
      pixels[index + 3] = co;
    }
  }
  updatePixels();
  if (frameCount % 720 === 0) {
    co = co === 0 ? 255 : 0;
    offset += 1;
    console.log("switch");
  }
}
