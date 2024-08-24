function setup() {
  createCanvas(windowWidth, windowHeight);

  rectWidth = windowWidth / 8;
  rectHeight = windowHeight / 8;

  bottomLeft = createVector(
    windowWidth / 2 - rectWidth / 2,
    windowHeight / 2 - rectHeight / 2
  );

  balls = [];

  for (let i = 0; i < 100; i++) {
    balls[i] = new BouncingBall(bottomLeft, rectWidth, rectHeight);
  }
}

function draw() {
  frameRate(60);
  background(220);
  // Translate to bottom left corner
  translate(0, height);

  // Invert the y-axis
  scale(1, -1);

  // Draw the rectangle
  rect(bottomLeft.x, bottomLeft.y, rectWidth, rectHeight);

  line(bottomLeft.x, bottomLeft.y, 0, 0);
  line(bottomLeft.x + rectWidth, bottomLeft.y, windowWidth, 0);
  line(
    bottomLeft.x + rectWidth,
    bottomLeft.y + rectHeight,
    windowWidth,
    windowHeight
  );
  line(bottomLeft.x, bottomLeft.y + rectHeight, 0, windowHeight);
  balls.sort((a, b) => a.center.z - b.center.z);
  for (let i = 0; i < balls.length; i++) {
    console.log(i);
    balls[i].move();
    balls[i].show();
  }
}
