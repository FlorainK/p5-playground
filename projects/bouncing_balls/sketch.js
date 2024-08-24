function setup() {
  count = 1;
  createCanvas(windowWidth, windowHeight);
  let centerX = width / 2;
  let centerY = height / 2;

  rectWidth = width / 8;
  rectHeight = height / 6;

  upperLeftCorner = [centerX - rectWidth / 2, centerY - rectHeight / 2];
  lowerRightCorner = [centerX + rectWidth / 2, centerY + rectHeight / 2];
  balls = [];
  y = 100;
  for (i = 0; i < count; i++) {
    balls[i] = new BouncingBall(upperLeftCorner, lowerRightCorner, y);
    y -= random(0, 10);
  }
  console.log(upperLeftCorner);
  console.log(lowerRightCorner);
}

function draw() {
  translate(0, height);
  scale(1, -1);
  frameRate(1);
  background(220);
  // rect(upperLeftCorner[0], upperLeftCorner[1], rectWidth, rectHeight);
  // line(0, 0, upperLeftCorner[0], upperLeftCorner[1]);
  // line(width, 0, lowerRightCorner[0], upperLeftCorner[1]);
  // line(width, height, lowerRightCorner[0], lowerRightCorner[1]);
  // line(0, height, upperLeftCorner[0], lowerRightCorner[1]);
  circle(0, 0, 10);
  // for (i = 0; i < count; i++) {
  //   balls[i].move();
  //   balls[i].show();
  // }
}
