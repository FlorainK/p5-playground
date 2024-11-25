function setup() {
  createCanvas(windowWidth, windowHeight);
}

var frames = 200;

function draw() {
  if (frameCount % (frames * 2) === 0) {
    stroke(0, 0, 0);
    console.log("black");
  } else if (frameCount % frames === 0) {
    stroke(256, 256, 256);
    console.log("white");
  }
  for (let i = 0; i < 5000; i++) {
    yCoord = randomGaussian(
      ((frameCount % frames) / frames) * windowHeight,
      windowHeight / 5
    );
    point(random(0, windowWidth), yCoord);
  }
}
