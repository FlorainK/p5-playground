function setup() {
  count = 20;
  createCanvas(windowWidth, windowHeight);
  let centerX = width / 2;
  let centerY = height / 2;

  let rectWidth = width / 6;
  let rectHeight = height / 6;

  upperLeftCorner = [centerX - rectWidth / 2, centerY - rectHeight / 2];
  lowerRightCorner = [centerX + rectWidth / 2, centerY + rectHeight / 2];
  balls = [];
  y = 100;
  for (i = 0; i < count; i++) {
    balls[i] = new BouncingBall(upperLeftCorner, lowerRightCorner, y);
    y -= random(0, 10);
  }
}

function draw() {
  background(220);
  rect(upperLeftCorner[0], upperLeftCorner[1], width / 2, height / 2);
  quad(
    0,
    0,
    upperLeftCorner[0],
    upperLeftCorner[1],
    upperLeftCorner[0],
    lowerRightCorner[1],
    0,
    height
  );
  quad(
    0,
    0,
    upperLeftCorner[0],
    upperLeftCorner[1],
    lowerRightCorner[0],
    upperLeftCorner[1],
    width,
    0
  );
  quad(
    lowerRightCorner[0],
    upperLeftCorner[1],
    width,
    0,
    width,
    height,
    lowerRightCorner[0],
    lowerRightCorner[1]
  );
  quad(
    upperLeftCorner[0],
    lowerRightCorner[1],
    lowerRightCorner[0],
    lowerRightCorner[1],
    width,
    height,
    0,
    height
  );

  for (i = 0; i < count; i++) {
    balls[i].move();
    balls[i].show();
  }
}
