function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  if (frameCount % 2000 === 0) {
    stroke(0, 0, 0);
    console.log("black");
  } else if (frameCount % 1000 === 0) {
    stroke(255, 255, 255);
    console.log("white");
  }
  for (let i = 0; i < 5000; i++) {
    point(random(0, windowWidth), random(0, windowHeight));
  }
}
