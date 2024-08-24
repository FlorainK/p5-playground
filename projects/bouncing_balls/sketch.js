function setup() {
  createCanvas(windowWidth, windowHeight);

  rectWidth = windowWidth / 8;
  rectHeight = windowHeight / 8;

  bottomLeft = createVector(
    windowWidth / 2 - rectWidth / 2,
    windowHeight / 2 - rectHeight / 2
  );

  balls = [];

  balls[0] = new BouncingBall(bottomLeft, rectWidth, rectHeight);
}

function draw() {
  frameRate(20);
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

  balls[0].move();
  balls[0].show();
}
